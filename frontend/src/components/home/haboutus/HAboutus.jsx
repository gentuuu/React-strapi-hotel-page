import { useState } from 'react';
import Aboutus from '../../../assets/aboutus.jpg';
import './HAboutus.scss';

const HAboutus = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="aboutus">
        <div className="container">
          <div className="aboutus-content">
            <div className="aboutus-left">
              <div className="aboutus-left-img">
                <img src={Aboutus} alt="" />
              </div>
            </div>
            <div className="aboutus-right">
              <div className="aboutus-right-title">Lorem ipsum</div>
              <div className="aboutus-right-items">
                <div className={`aboutus-right-item ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleClick(0)}>O nas</div>
                <div className={`aboutus-right-item ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>Dlaczego my</div>
                <div className={`aboutus-right-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>Nasza misja</div>
              </div>
              <div className="aboutus-right-text">
                {activeIndex === 0 && <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit sed doloremque aspernatur ipsam sequi dicta tempora. Aspernatur eligendi pariatur, laudantium distinctio nesciunt eius labore, accusantium impedit dolorum sit, repellendus asperiores?</p>}
                {activeIndex === 1 && <p>1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit sed doloremque aspernatur ipsam sequi dicta tempora. Aspernatur eligendi pariatur, laudantium distinctio nesciunt eius labore, accusantium impedit dolorum sit, repellendus asperiores?</p>}
                {activeIndex === 2 && <p>2Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit sed doloremque aspernatur ipsam sequi dicta tempora. Aspernatur eligendi pariatur, laudantium distinctio nesciunt eius labore, accusantium impedit dolorum sit, repellendus asperiores?</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HAboutus;
