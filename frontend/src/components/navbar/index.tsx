import {ReactComponent as GitHubIcon} from '../../assets/img/github.svg'
import './styles.css'

function Navbar() {
    return(
        <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/cjeanpablo" target="_blank" rel="noreferrer">
              <div className="dsmovie-contact-container">
                <GitHubIcon target="_blank"/>
                <p className="dsmovie-contact-link">/devsuperior</p>
              </div>
              </a>
          </div>
        </nav>
      </header>
    ) 
}

export default Navbar;