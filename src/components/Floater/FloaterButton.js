import "./floater.css";
import ReactWhatsapp from "react-whatsapp";
import Contact from '../../pages/Contact';

const FloaterButton = () => {
    const handle = (event) => {
        return(
        console.log("Event"),
        <Contact/>
        )
    }
    return (
        <div className="floating-container">
            <div className="floating-button">+</div>
            <div className="element-container">

                <a href = "/contact" onClick={handle}>
                    <span className="float-element tooltip-left">
                        <i className="material-icons">phone</i>
                    </span>
                </a>
                <span className="float-element">
                    <i className="material-icons">email
                    </i>
                </span>
                <ReactWhatsapp style={{ "backgroundColor": "transparent", "border": "none" , "paddingLeft":"25%"}} number="917028200411">
                    <span className="float-element">
                        <i className="material-icons">chat</i>
                    </span>
                </ReactWhatsapp>
            </div>
        </div>
    )
}

export default FloaterButton;