import HAboutus from "../home/haboutus/HAboutus"
import "./Aboutus.scss"
import Heading_page from "../common/heading/Heading_page"
import { useQuery, gql } from '@apollo/client'


const POKOJE = gql`
{
    pokoje{
        data{
        id,
        attributes{
            Title,
            Dsc,
            Text,
            Price,
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


const Aboustus = () => {

    const { loading, error, data } = useQuery(POKOJE);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

  return (
    <>
        <Heading_page title='O nas' />
        <HAboutus />
        <div className="aboutus">
            <div className="aboutus-title">Nasze pokoje</div>
            <div className="aboutus-items">
                {data.pokoje.data.map(pokoje => (
                <a key={pokoje.id} href={`/pokoje/${pokoje.id}`} className="aboutus-item">
                    <div className="aboutus-item__img">
                        <img src={`http://localhost:1337${pokoje.attributes.Image.data.attributes.url}`} alt="" />
                    </div>
                    <div className="aboutus-item__content">
                        <div className="aboutus-item__title">{pokoje.attributes.Title}</div>
                        <div className="aboutus-item__price"><span>{pokoje.attributes.Price}</span> / NOC</div>
                    </div>
                </a>
                ))}
            </div>
        </div>
        <div className="aboutus-info">
            <div className="container">
                <div className="aboutus-info-content">
                    <div className="aboutus-info-items">
                        <div className="aboutus-info-item">
                            <div className="aboutus-info-item__number">1502</div>
                            <div className="aboutus-info-item__title">Klientów</div>
                        </div>
                        <div className="aboutus-info-item">
                            <div className="aboutus-info-item__number">1502</div>
                            <div className="aboutus-info-item__title">Klientów</div>
                        </div>
                        <div className="aboutus-info-item">
                            <div className="aboutus-info-item__number">1502</div>
                            <div className="aboutus-info-item__title">Klientów</div>
                        </div>
                        <div className="aboutus-info-item">
                            <div className="aboutus-info-item__number">1502</div>
                            <div className="aboutus-info-item__title">Klientów</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Aboustus
