import './css/sidenav.css';


function SideNav() {

    // function openNav() {
    //     document.getElementById("mySidenav").style.width = "250px";
    //   }
      
    // function closeNav() {
    //     document.getElementById("mySidenav").style.width = "0";
    // }
  return (
      
        <div id="mySidenav" className="sidenav">
            <a href="#">Home</a>
            <a href="#">Discover Talent</a>
            <a href="#">Messages</a>
            <a href="#">Job Listings</a>
            <a href="#">Projects & Invoices</a>
            <a href="#">Payments</a>
            <a href="#">Storefront</a>
            <a href="#">Settings</a>
        </div>
  );
}

export default SideNav;
