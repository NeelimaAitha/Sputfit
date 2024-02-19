import './index.css'

const RateYourSkills = () => (
  <div className="rating-skills-container">
    <p className="rating-skills-top-text">
      Let your friends, family and co-workers (anonymously) rate your skills.
    </p>
    <h1 className="rating-skills-title">
      Ever wondered what others think of you?
    </h1>
    <div className="rating-skills-white-card">
      <div className="rating-skills-timeline-containers">
        <div className="rating-time-line-dot you-dot"></div>
        <div className="rating-skills-timeline-items you-box">
          <p>You</p>
        </div>
      </div>
      <div className="rating-skills-timeline-containers">
        <div className="rating-time-line-dot one-dot"></div>
        <div className="rating-skills-timeline-items anonymous-bottom anonymous1">
          <p>Anonymous 1</p>
        </div>
      </div>
      <div className="rating-skills-timeline-containers">
        <div className="rating-time-line-dot two-dot"></div>
        <div className="rating-skills-timeline-items anonymous2">
          <p>Anonymous 2</p>
        </div>
      </div>
      <div className="rating-skills-timeline-container-last">
        <div className="rating-time-line-dot three-dot"></div>
        <div className="rating-skills-timeline-items anonymous-bottom anonymous3">
          <p>Anonymous 3</p>
        </div>
      </div>
    </div>
  </div>
)

export default RateYourSkills
