import { Link } from 'react-router'

function Header() {
  return (
    <header style={{ 
      backgroundColor: '#f8f9fa', 
      padding: '1rem',
      borderBottom: '1px solid #dee2e6'
    }}>
      <nav>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/posts" style={{ marginRight: '1rem' }}>Posts</Link>
        <Link to="/info/about" style={{ marginRight: '1rem' }}>About</Link>
        <Link to="/info/counter" style={{ marginRight: '1rem' }}>Counter</Link>
        <Link to="/info/location" style={{ marginRight: '1rem' }}>Location</Link>
      </nav>
    </header>
  )
}

export default Header 