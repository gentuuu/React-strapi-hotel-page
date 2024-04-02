    import './Heading.scss'
    import defaultImage from "../../../assets/slider1.jpg"
    import { Link, useLocation } from 'react-router-dom';


    const Heading_page = ({ title, image }) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    
    const imgSrc = image || defaultImage;

    return (
    <>
        <div className="header-page">
            <div className="header-page__img">
                <img src={imgSrc} alt="" />
            </div>
            <div className="header-page-content">
                <div className="header-page__title">{title}</div>
                <div className="header-page__breadcrumbs">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;
                        return isLast ? (
                        <li className={index===pathnames.length - 1 ? 'active' : '' } key={name}>
                            {name}
                        </li>
                        ) : (
                        <li className={index===pathnames.length - 1 ? 'active' : '' } key={name}>
                            <Link to={routeTo}>{name}</Link>
                        </li>
                        );
                        })}
                    </ul>
                    
                </div>
            </div>
        </div>
    </>
    )
    }

    export default Heading_page