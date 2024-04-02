/* eslint-disable react/jsx-key */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuery, gql } from '@apollo/client'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.scss';

import { Pagination } from 'swiper/modules';


const SLIDER = gql`
{
  sliders{
    data{
      id
      attributes{
        Title,
        Text,
        Link,
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

function Slider() {

  const { loading, error, data } = useQuery(SLIDER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
    <Swiper
      direction={'vertical'}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {data.sliders.data.map(slider => (
      <SwiperSlide>
        <div key={slider.id} className="swiper-slide-row">
          <div className="swiper-slide-img">
            <img src={`http://localhost:1337${slider.attributes.Image.data.attributes.url}`} alt="" />
          </div>
          <div className="swiper-slide-content">
            <div className="swiper-slide-text">{slider.attributes.Title}</div>
            <div className="swiper-slide-title">{slider.attributes.Text}</div>
            <a href={slider.attributes.Link} className="swiper-slide-button">Czytaj dalej</a>
          </div>
        </div>
      </SwiperSlide>
      ))}
    </Swiper>
  </>
  )
}

export default Slider
