import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Hệ Thống Thủy Canh IoT</Navbar.Brand>
                <Nav>
                    <NavLink onClick={() => navigate("/")}>Trang Chủ</NavLink>
                    <NavLink onClick={() => navigate("/control")}>Điều Khiển</NavLink>
                    <NavLink onClick={() => navigate("/infor")}>Thông tin</NavLink>
                    <NavLink onClick={() => navigate("/contact")}>Liên Hệ</NavLink>
                </Nav >
            </Container >
        </Navbar >
    );
}

export default Header;