// import { room } from '../../../data'
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

const RoomsItem = () => {

    const { loading, error, data } = useQuery(POKOJE);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (

        <>
            {data.pokoje.data.map(pokoje => (
            <div key={pokoje.id} className="rooms-item">
                <div className="rooms-item__img">
                    <img src={`http://localhost:1337${pokoje.attributes.Image.data.attributes.url}`} alt="" />
                </div>
                <div className="rooms-item-content">
                    <div className="rooms-item__title">{pokoje.attributes.Title}</div>
                    <div className="rooms-item__text">{pokoje.attributes.Dsc}</div>
                    <a href={`/pokoje/${pokoje.id}`} className="rooms-item__btn">Czytaj więcej</a>
                </div>
                <div className="rooms-item__price">
                    <span>{pokoje.attributes.Price}</span>
                    <p>/ Noc</p>
                </div>
            </div>
            ))}

        </>
    )

}

export default RoomsItem