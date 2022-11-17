import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
           <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://images.pexels.com/photos/2468773/pexels-photo-2468773.jpeg?auto=compress&cs=tinysrgb&w=600"
             alt="" />
            <p>
            Beach House has returned with their 8th studio album, 
            Once Twice Melody: a sprawling 18-track apotheosis released in four chapters. 
            </p>
           </div>
           <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarItem">
                <li className="sidebarListItem">Shoes</li>
                <li className="sidebarListItem">Instruments</li>
                <li className="sidebarListItem">Dress</li>
                <li className="sidebarListItem">Tv</li>
                <li className="sidebarListItem">Airpods</li>
                <li className="sidebarListItem">Phones</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>

        </div>
    </div>
  )
}
