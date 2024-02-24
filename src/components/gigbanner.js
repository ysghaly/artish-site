import image from '../assets/Copy of Frame 2.png'
import './css/gigbanner.css';



function GigBanner() {
    const handleClick = () => {
        alert("hi");
      };
    
  return (
    <div className="GigBanner">
        <h3>Create a gig listing for this search</h3>
        <div className='banner-image-container'>
            <img className='banner-image' src={image} />
        </div>
        <div className='banner-button-container'>
            <button className='banner-button' type='button' onClick={handleClick}>Post a Gig</button>
        </div>
    </div>
  );
}

export default GigBanner;
