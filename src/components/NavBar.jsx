import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabaseClient'
import { ADMIN_EMAIL } from '../config'

function NavBar() {
  const { pathname } = useLocation()
  const { user } = useAuth()
  const navigate = useNavigate()
  const isAdmin = user?.email === ADMIN_EMAIL

  async function handleLogout() {
    await supabase.auth.signOut()
    navigate('/')
  }

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">CS571 App</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-md-center">
            <Nav.Link as={Link} to="/" active={pathname === '/'}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" active={pathname === '/about'}>About</Nav.Link>
            {isAdmin ? (
              <>
                <Nav.Link as={Link} to="/admin" active={pathname === '/admin'}>Admin</Nav.Link>
                <Button size="sm" variant="outline-light" onClick={handleLogout}>Log Out</Button>
              </>
            ) : (
              <Nav.Link as={Link} to="/login" active={pathname === '/login'}>Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
