/* eslint-disable react/jsx-key */
import './Footer.scss'
import { Link } from 'react-router-dom';
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { TiSocialTwitter, TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";

import { useQuery, gql } from '@apollo/client'


const BLOGS = gql`
query{
blogs{
    data{
      id
      attributes{
        createdAt,
        title,
      }
    }
  }
}
`


const formatDate = (dateString) => {
    const createdAt = new Date(dateString);
    return `${createdAt.getDate()}-${createdAt.getMonth() + 1}-${createdAt.getFullYear()}`;
}

const Footer = () => {

  
    const { loading, error, data } = useQuery(BLOGS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

   

return (

<>
    <footer>
        <div className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-items">
                        <div className="footer-item">
                            <div className="footer-item__title">Kontakt</div>
                            <ul className='footer-info'>
                                <li><span><FaPhone /></span>123456789</li>
                                <li><span><IoMdMail /></span>phone@gmao.com</li>
                                <li><span><FaLocationDot /></span>3 maja Rzeszów</li>
                            </ul>
                        </div>
                        <div className="footer-item">
                            <div className="footer-item__title">Ostatnie wpisy</div>
                            <ul className='footer-blog'>
                                {data.blogs.data.slice(0, 2).map(blog => (
                                <li>
                                    <a key={blog.id} href="">{blog.attributes.title}</a>
                                    <span>{formatDate(blog.attributes.createdAt)}</span>
                                </li>
                                 ))}
                            </ul>
                        </div>
                        <div className="footer-item">
                            <div className="footer-item__title">Menu</div>
                            <ul className='footer-menu'>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/onas'>O nas</Link>
                                </li>
                                <li>
                                    <Link to='/pokoje'>Pokoje</Link>
                                </li>
                                <li>
                                    <Link to='/blogs'>Blog</Link>
                                </li>
                                <li>
                                    <Link to='/kontakt'>Kontakt</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
                <div className="footer-copyright-content">
                    <div className="footer-copyright-left">
                        <p>Wszysyloe prawa gentuuuu</p>
                    </div>
                    <div className="footer-copyright-social">
                        <ul>
                            <li>
                                <a href=""><TiSocialTwitter /></a>
                            </li>
                            <li>
                                <a href=""><TiSocialFacebook /></a>
                            </li>
                            <li>
                                <a href=""><TiSocialInstagram /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-copyright-privacy">
                        <a href="">Polityka ptywatności</a>
                    </div>
                </div>
                
            </div>
        </div>
    </footer>
</>
)
}

export default Footer