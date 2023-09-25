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
        <div class="floating-container">
            <div class="floating-button">+</div>
            <div class="element-container">

                <a href = "/contact" onClick={handle}>
                    <span class="float-element tooltip-left">
                        <i class="material-icons">phone</i>
                    </span>
                </a>
                <span class="float-element">
                    <i class="material-icons">email
                    </i>
                </span>
                <ReactWhatsapp style={{ "backgroundColor": "transparent", "border": "none" , "paddingLeft":"25%"}} number="917028200411">
                    <span class="float-element">
                        <i class="material-icons">chat</i>
                    </span>
                </ReactWhatsapp>
            </div>
        </div>
    )
}

export default FloaterButton;