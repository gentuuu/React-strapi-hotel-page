import Heading_page from "../common/heading/Heading_page"
import "./Contact.scss"
import { FaPhone, FaHouseChimneyCrack, FaMessage  } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
        <Heading_page title="Kontakt" />
        <div className="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-items">
                        <div className="contact-item">
                            <div className="contact-item__icon"><FaPhone /></div>
                            <div className="contact-item__text">
                                123456798
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-item__icon"><FaHouseChimneyCrack  /></div>
                            <div className="contact-item__text">
                                123456798
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-item__icon"><FaMessage /></div>
                            <div className="contact-item__text">
                                123456798
                            </div>
                        </div>
                    </div>
                    <div className="contact-map">
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20498.108295079375!2d21.995035392065446!3d50.04389430909513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1711209303173!5m2!1spl!2spl" width="800" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact
