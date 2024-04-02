/* eslint-disable react/jsx-key */
import "./Roompage.scss"
import Heading_page from "../../common/heading/Heading_page"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';


const POKOJ = gql`
query Getpokoj($id: ID!) {
    pokoj(id: $id) {
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
                },
                Gallery{
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



const Roompage = () => {

    const { id } = useParams();
    const { loading: pokojeLoading, error: pokojeError, data: pokojeData } = useQuery(POKOJ, {
        variables: { id: id }
    });

    if (pokojeLoading) return <p>Loading...</p>;
    if (pokojeError) return <p>Error fetching pokoj data...</p>;


    return (
    <>
        <Heading_page title={pokojeData.pokoj.data.attributes.Title} image={`http://localhost:1337${pokojeData.pokoj.data.attributes.Image.data.attributes.url}`} />
        <div className="page-room">
            <div className="container">
                <div className="page-room-content">
                    <div className="page-room-title">{pokojeData.pokoj.data.attributes.Title}</div>
                    <div className="page-room-text">{pokojeData.pokoj.data.attributes.Text}</div>
                </div>
                <div className="page-room-gallery">
            

               
                <Swiper
                     slidesPerView={3}
                     spaceBetween={50}
                     pagination={{
                       clickable: true,
                     }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    {pokojeData.pokoj.data.attributes.Gallery.data.map((photo) => (
                        <SwiperSlide>
                            <img key={photo.id} src={`http://localhost:1337${photo.attributes.url}`} />
                        </SwiperSlide>
                    ))}

                </Swiper>
                </div>
            </div>
        </div>
    </>
  )
}

export default Roompage