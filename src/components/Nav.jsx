function Nav(){
    const linkClass = ({ isActive}) =>
        isActive ? "nav-link nav-link-active" : "nav-link";
    return (
        <nav className="nav">
            <NavLink className={linkClass} to="/">
                Home
            </NavLink>

            <NavLink className={linkClass} to="/pokedex">
                Pokedex
            </NavLink>

            
        </nav>
    )
}

export default Nav;