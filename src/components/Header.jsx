import {Link} from "react-router-dom";
import Nav from "./Nav";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="logo" to="/">
          PokéPortal
        </Link>
      </div>
    </header>
  );
}

export default Header;