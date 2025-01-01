import "./about.css";
const About = () => {
  return (
    <div class="parent">
      <div class="child one">
        <div className="about-story">
          <h4>Our Little Story</h4>
          <br />
          <h1>Something About us</h1>
        </div>
        <br />
        <div className="about-description-parent">
          <div className="about-description">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine. I am so happy, my dear
            friend,
          </div>
          <div className="about-description">
            so absorbed in the wind I should be incapable of drawing a single
            stroke at the present moment; and yet I feel that I never was a
            greater artist than now. When, while the lovely valley teems with
            vapour around me, and the meridian. I throw myself down among the
            tall grass by the trickling stream; and.
          </div>
        </div>
      </div>
      <div className="child two"></div>
      <div className="child three">
        <div className="fact1">
        <iframe title="demo" width="100%" height="100%" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"/>
        </div>
        <div className="fact2">
          <h3>DID YOU KNOW THAT?</h3>
          <h1>We are trusted by more than 5,000 clients</h1>
          <p>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine. More than 25 years of
            experience working in the industry has enabled us to build our
            services and solutions in strategy, consulting, digital.
          </p>
        </div>
        <div className="fact3">
          <h1>We are an expert in this field</h1>
          <h4>
            Yet I feel that I never was a greater artist than now. When, while
            the lovely valley teems.
          </h4>
          <ul>
            <li>Premium services and beyond your expectation</li>
            <li>Get the best support among all venders</li>
            <li>Fully responsive and works great on all major devices</li>
            <li>Tons of admin panel options</li>
          </ul>
        </div>
        <div className="fact4"></div>
      </div>
    </div>
  );
};

export default About;
