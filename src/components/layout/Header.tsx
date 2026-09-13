import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <header
      className="header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        transition: 'all 0.3s ease',
      }}
    >
      <Link to="/" className="header-logo">
        My Portfolios
      </Link>
      <nav>
        <ul className="nav-list" style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
          {/* Home */}
          <li>
            <Link to="/" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '2.0rem' }}>
              <i className="fi fi-ts-garage"></i>
            </Link>
          </li>

          {/* Playground */}
          <li>
            <Link to="/PlayGround" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '2.0rem' }}>
              <i className="fi fi-ts-rocket-lunch"></i>
            </Link>
          </li>

          {/* Portfolio */}
          <li>
            <Link to="/portfolio" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '2.0rem' }}>
              <i className="fi fi-ts-portfolio"></i>
            </Link>
          </li>

          {/* Memo */}
          <li>
            <Link to="/memo" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '2.0rem' }}>
              <i className="fi fi-ts-ballot"></i>
            </Link>
          </li>

          {/* Contact */}
          <li>
            <Link to="/contact" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '2.0rem' }}>
              {/* tr (thin rounded) ではなく ts (thin straight) に統一して表示を安定させます */}
              <i className="fi fi-ts-handshake"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;