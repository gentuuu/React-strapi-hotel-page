import './HInfo.scss'
import '../../../../src/styles.scss'
import { FaMapLocationDot, FaHouseChimney, FaStar } from "react-icons/fa6";


const HInfo = () => {
  return (
    <>
        <div className="info">
            <div className="container">
                <div className="info-content">
                    <div className="info-items">
                        <div className="info-item">
                            <div className="info-item__icon">
                                <FaMapLocationDot style={{ width: '45px', height: '45px' }} />
                            </div>                     
                            <div className="info-item__title">Lorem ipsum dolor sit amet</div>
                            <div className="info-item__hr"></div>
                            <div className="info-item__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse, sunt hic aliquid pariatur nobis sapiente repudiandae modi tenetur vero molestiae porro unde accusantium facere dolorum nihil, laudantium recusandae consectetur!</div>
                        </div>
                        <div className="info-item">
                            <div className="info-item__icon">
                                <FaHouseChimney style={{ width: '45px', height: '45px' }} />
                            </div>
                            <div className="info-item__title">Lorem ipsum dolor sit amet</div>
                            <div className="info-item__hr"></div>
                            <div className="info-item__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse, sunt hic aliquid pariatur nobis sapiente repudiandae modi tenetur vero molestiae porro unde accusantium facere dolorum nihil, laudantium recusandae consectetur!</div>
                        </div>
                        <div className="info-item">
                            <div className="info-item__icon">
                                <FaStar style={{ width: '45px', height: '45px' }} />
                            </div>
                            <div className="info-item__title">Lorem ipsum dolor sit amet</div>
                            <div className="info-item__hr"></div>
                            <div className="info-item__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse, sunt hic aliquid pariatur nobis sapiente repudiandae modi tenetur vero molestiae porro unde accusantium facere dolorum nihil, laudantium recusandae consectetur!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}


export default HInfo
