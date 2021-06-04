
const SideNav = (props) => {

    return (
       <div className="side-nav">
           <div className="side-nav__close-btn">
               <i className="fas fa-times" />
           </div>
           <ul className="side-nav__main">
                <li>
                    <a href="/" className="active">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/" className="active">
                        Series
                    </a>
                </li>
                <li>
                    <a href="/" className="active">
                        Originals
                    </a>
                </li>
                <li>
                    <a href="/" className="active">
                        Movies
                    </a>
                </li>
                <li>
                    <a href="/" className="active">
                        Series
                    </a>
                </li>
                <li>
                    <a href="/" className="active">
                        Western
                    </a>
                </li>
           </ul>
           <div className="side-nav__divider" />
           <ul className="side-nav__main">
                <li>
                    <a href="/" className="active">
                        Comedy
                    </a>
                </li>
                <li>
                    <a href="/" className="active">
                        Action
                    </a>
                </li>
                <li>
                    <a href="/" className="active">
                        Horror
                    </a>
                </li>
                <li>
                    <a href="/" className="active">
                        Family
                    </a>
                </li>
                <li>
                    <a href="/" className="active">
                        Drama
                    </a>
                </li>
           </ul>
       </div>
    )
}

export default SideNav;