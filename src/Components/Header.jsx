import "../assets/css/Header.css"
import Logo from "../assets/icons/logo"

function Header() {

  return (
    <header>
      <div className="header-container">
        <div className="container-logo">
          <Logo/>
        </div>
        <div className="container-title">
          <h1 className="header-title1">Code</h1>
          <h1 className="header-title2">Vault</h1>
        </div>
        <div className="container-nav">
          <nav className="header-nav">
            <ul className="header-ul">
              <li className="header-item">Proyects</li>
              <li className="header-item">About</li>
              <li className="header-item">Settings</li>
            </ul>
          </nav>
        </div>
      </div>

    </header>
  )
}

export default Header