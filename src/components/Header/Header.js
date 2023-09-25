import "./header.css";

const Header = () => {
    return (
      <div className="header">
        <div className="city-dropdown">Latur</div>
        <div className="contact-tab">
          <p className="contact-tab-txt">
            <i className="bi bi-clock"></i>&nbsp;Mon - Fri 10:00-18:00
          </p>
  
          <p className="contact-tab-txt">
            {" "}
            <i class="bi bi-telephone-fill"></i>&nbsp;+91-7028200411
          </p>
          <p className="contact-tab-txt" style={{ marginRight: "1vw" }}>
            <i class="bi bi-envelope-open"></i>&nbsp; sprca@gmail.com
          </p>
        </div>
        <div className="social-media-icons">
          &nbsp; &nbsp;
          <a href="https://www.facebook.com/" style={{ color: "white" }}>
            <i class="bi bi-facebook"></i>
          </a>
          &nbsp; &nbsp;
          <a href="https://twitter.com/i/flow/login" style={{ color: "white" }}>
            <i class="bi bi-twitter"></i>
          </a>
          &nbsp; &nbsp;
          <a href="https://www.instagram.com/" style={{ color: "white" }}>
            <i class="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    );
  };
  
  export default Header;