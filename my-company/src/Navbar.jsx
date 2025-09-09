import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      padding: '12px 16px',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      gap: '12px',
      borderBottom: '1px solid #ddd'
    }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
