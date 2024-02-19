import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="header-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUHHhmODkp6LXZiHf1FRJNpV3ukrlxjHgNMQTNQ46WNCTL5RV0ACYYWt_HrbfX08YLms&usqp=CAU"
        alt="website logo"
        className="website-logo"
      />
      <ul className="nav-items">
        <li className="nav-list-item">Emotions</li>
        <li className="nav-list-item">Manifesto</li>
        <li className="nav-list-item">Self-awareness test</li>
        <li className="nav-list-item">Work With Us</li>
      </ul>
      <button className="download-app-btn">Download App</button>
    </div>
  </nav>
)

export default Header
