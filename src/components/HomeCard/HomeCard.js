import "./homeCard.css";
const HomeCard = () => {
  return (
    <div className="home-card-container">
      <div className="home-cards , home-cards1">
        <div className="home-card-title">
          <h3>
            <i class="bi bi-graph-up-arrow"></i> &nbsp;Analyze your business
          </h3>
          <br />
          Transforming distribution and marketing with key capabilities in
          customer insight and analytics.
        </div>
      </div>
      <div className="home-cards , home-cards2">
        <div className="home-card-title">
          <h3>
            <i class="bi bi-people-fill"></i> &nbsp;A Team of Professionals
          </h3>
          <br />
          Transforming distribution and marketing with key capabilities in
          customer insight and analytics.
        </div>
      </div>
      <div className="home-cards , home-cards3">
        <div className="home-card-title">
          <h3>
            <i class="bi bi-stopwatch"></i> &nbsp;ON TIME SERVICE
          </h3>
          <br />
          Transforming distribution and marketing with key capabilities in
          customer insight and analytics.
        </div>
      </div>
    </div>
  );
};
export default HomeCard;
