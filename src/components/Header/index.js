
import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'


const Header = (props) => 
    
    
  (
    <nav className="nav-bar">
        <div className="mobile-container">
            <div className="logo-container">
                <img
                    src="https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo-500x313.png"
                    alt="App Logo"
                    className="logo"
                />
                <p className='desktop-nav-items' >Solutions<select className="drop-downs"></select></p> 
                <p className="desktop-nav-items">Pricing</p>
                <p className="desktop-nav-items">Resources<select className="drop-downs"></select></p>
                
            </div>
            <div className="mobile-nav-items-container">
            {/*Should Use Link component here for Start free trail paragraph element but currently i'm using anchor tag here*/}
                <a href="/free-trail" className="mobile-nav-items ">Start free trail</a>
                <GiHamburgerMenu className="mobile-nav-items" fontSize={25}/>
                <button type="button" className="desktop-login-btn">Log in</button>
                <button type="button" className="desktop-trail-btn">Start free trail</button>
            </div>
        </div>
        
    </nav>
)
  

export default Header