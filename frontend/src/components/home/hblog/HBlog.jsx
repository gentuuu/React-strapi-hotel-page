import './HBlog.scss'
import { useQuery, gql } from '@apollo/client'
import { useLocation } from 'react-router-dom';

const BLOGS = gql`
  query GetBlog {
    blogs {
      data {
        id
        attributes {
          createdAt
          slug
          title
          Text
          Desc
          Author
          category {
            data {
              attributes {
                Title
              }
            }
          }
          Image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

const formatDate = (dateString) => {
  const createdAt = new Date(dateString);
  return `${createdAt.getDate()}-${createdAt.getMonth() + 1}-${createdAt.getFullYear()}`;
}

const HBlog = () => {
  const location = useLocation();
  const { loading, error, data } = useQuery(BLOGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // Sprawdzamy, czy jesteśmy na stronie głównej
  const isHomePage = location.pathname === '/';

  return (
    <>
      <div className="blogs">
        <div className="container">
          <div className="blogs-content">
            <div className="blogs-title">Nasze artykuły</div>
            <div className="blogs-items">
              {isHomePage && data.blogs.data.slice(0, 2).map(blog => (
                <a key={blog.id} href={`/blogs/${blog.id}`} className="blogs-item">
                  <div className="blogs-item__img">
                    <img src={`http://localhost:1337${blog.attributes.Image.data.attributes.url}`} alt="" />
                  </div>
                  <div className="blogs-item-content">
                    <div className="blogs-item__title">{blog.attributes.title}</div>
                    <div className="blogs-item__text">{blog.attributes.Desc}</div>
                    <div className="blogs-item__date">{formatDate(blog.attributes.createdAt)}</div>
                  </div>
                </a>
              ))}
              {!isHomePage && data.blogs.data.map(blog => (
                <a key={blog.id} href={`/blogs/${blog.id}`} className="blogs-item">
                  <div className="blogs-item__img">
                    <img src={`http://localhost:1337${blog.attributes.Image.data.attributes.url}`} alt="" />
                  </div>
                  <div className="blogs-item-content">
                    <div className="blogs-item__title">{blog.attributes.title}</div>
                    <div className="blogs-item__text">{blog.attributes.Desc}</div>
                    <div className="blogs-item__date">{formatDate(blog.attributes.createdAt)}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HBlog
