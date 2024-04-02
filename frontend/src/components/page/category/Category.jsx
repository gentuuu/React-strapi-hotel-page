import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      data {
        id
        attributes {
          Title
          blog {
            data {
              id
              attributes {
                title
              }
            }
          }
        }
      }
    }
  }
`;

const BLOGS = gql`
  {
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
              id
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
`;

const Category = () => {
  const { id } = useParams();
  const { loading, error, data: categoryData } = useQuery(CATEGORY, {
    variables: { id: id },
  });
  const { data: blogsData } = useQuery(BLOGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // Filter blogs by category ID
  const filteredBlogs = blogsData.blogs.data.filter(
    (blog) => blog.attributes.category.data.id === id
  );

  return (
    <>
      <div className="categories">
        <h2>{categoryData.category.data.attributes.Title}</h2>
        <div className="blogs-items">
          {filteredBlogs.map((blog) => (
            <a key={blog.id} href={`/blogs/${blog.id}`} className="blogs-item">
              <div className="blogs-item__img">
                <img
                  src={`http://localhost:1337${blog.attributes.Image.data.attributes.url}`}
                  alt=""
                />
              </div>
              <div className="blogs-item-content">
                <div className="blogs-item__title">{blog.attributes.title}</div>
                <div className="blogs-item__text">{blog.attributes.Desc}</div>
                {/* <div className="blogs-item__date">{formattedDate(blog.attributes.createdAt)}</div> */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
