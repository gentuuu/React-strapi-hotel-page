import Heading_page from '../../common/heading/Heading_page';
import './Post.scss'
import { FaRegClock } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';




const BLOG = gql`
query GetBlog($id: ID!) {
  blog(id: $id) {
    data {
      id
      attributes {
        createdAt,
        slug,
        title,
        Desc,
        Text,
        Author,
        Image{
          data{
            attributes{
              url
            }
          }
        },
        category{
          data{
            attributes{
              Title
            }
          }
        }
      }
    }
  }
}
`



const CATEGORY = gql`
{
  categories{
    data{
      attributes{
        Title
      }
    }
  }
}
`

const BLOGS = gql`
{
  blogs{
    data{
      id
      attributes{
        createdAt,
        slug,
        title,
        Text,
        Desc,
				Author,
        category{
          data{
            attributes{
              Title
            }
          }
        },
				Image{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}
`




const Post = () => {

  const { id } = useParams();
  const { loading: blogLoading, error: blogError, data: blogData } = useQuery(BLOG, {
    variables: { id: id }
  });

  const { loading: categoryLoading, error: categoryError, data: categoryData } = useQuery(CATEGORY);
  const { loading: blogsLoading, error: blogsError, data: blogsData } = useQuery(BLOGS);

  if (blogLoading || categoryLoading || blogsLoading) return <p>Loading...</p>;
  if (blogError) return <p>Error fetching blog data...</p>;
  if (categoryError) return <p>Error fetching category data...</p>;
  if (blogsError) return <p>Error fetching blogs data...</p>;

  const createdAt = new Date(blogData.blog.data.attributes.createdAt);
  const formattedDate = `${createdAt.getDate()}-${createdAt.getMonth() + 1}-${createdAt.getFullYear()}`;

  return (
    <>
      <Heading_page title={blogData.blog.data.attributes.title} image={`http://localhost:1337${blogData.blog.data.attributes.Image.data.attributes.url}`} />
      <div className="post">
        <div className="container">
          <div className="post-row">
            <div className="post-content">
              <div className="post-title"><h1>{blogData.blog.data.attributes.title}</h1></div>
              <div className="post-details">
                <div className="post-details-category">{blogData.blog.data.attributes.category.data.attributes.Title}</div>
                <div className="post-details-date"><span><FaRegClock /></span>{formattedDate}</div>
                <div className="post-details-user">BY <span>{blogData.blog.data.attributes.Author}</span></div>
              </div>
              <div className="post-text">
                {blogData.blog.data.attributes.Text}
              </div>
            </div>
            <div className="post-sidebar">
              <div className="sidebar-item">
                <div className="sidebar-title">Category</div>
                <div className="sidebar-content">
                  <ul>
                  {categoryData.categories.data.map(category => (
                    <li key={category.attributes.Title}><a href="">{category.attributes.Title}</a></li>
                  ))}
                  </ul>
                </div>
              </div>
              <div className="sidebar-item">
                <div className="sidebar-title">Blog</div>
                <div className="sidebar-content">
                  {blogsData.blogs.data.map(blogs => (
                    <a key={blogs.id} href={`/blogs/${blogs.id}`} className="sidebar-post-item">
                      <div className="sidebar-post-item__img">
                        <img src={`http://localhost:1337${blogs.attributes.Image.data.attributes.url}`} alt="" />
                      </div>
                      <div className="sidebar-post-item__title">{blogs.attributes.title}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;

