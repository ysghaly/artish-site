import logo from '../assets/artish logo.png';
import './css/topbar.css';


function TopBar() {
  return (
    <div className="TopBar">
        <div className='topbar-logo-container'>
            <img src={logo} className='topbar-logo'/>
        </div>
        <div className='topbar-profile'>
            <button className='topbar-button'>Sign Up</button>
            <button className='topbar-button'>Sign In</button>
        </div>
    </div>
  );
}

export default TopBar;
