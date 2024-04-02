import './HBanner.scss'
import banner from '../../../assets/banner.jpg'


const HBanner = () => {
  return (
    <>
        <div className="banner">
            <div className="banner-content">
                <div className="banner-img">
                    <img src={banner} alt="" />
                </div>
                <div className="banner-row">
                    <div className="banner-title">lorem</div>
                    <div className="banner-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut beatae libero ab autem eius reprehenderit cum, nobis nihil assumenda numquam odio illum obcaecati ea sapiente dicta laborum voluptatum vel velit?</div>
                    <a href='' className="banner-btn">
                       Dowiedz się więcej
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default HBanner