import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><Image src='https://lh3.googleusercontent.com/Gvz6xoWi_9qrEHVfXFxn1r4xdma5Vbzg-MrZpBJAb9pnk5QalmbIH61HPC9_IM-00DzRtA8YnlX3eObtGON--AIKTKwIKR1Sn07c8ngonV5NbSg7UPht2C-ifUDnjbt18cQav7ZpTw=w2400' fluid={true} height={150} width={150} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation