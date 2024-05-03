'use client'

import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const diseases = [
    {
        id:1,
        name: 'Digestive system',
        href: "./digestiveSystem"
    },
    {
        id:2,
        name: 'Muscular skeletal system',
        href: "./muscularSkeletalSystem"
    },
    {
        id:3,
        name: 'Endocrine',
        href: "./endrocrine"
    },
    {
        id:4,
        name: 'Central nerves system',
        href: "./centralNervesSystem"
    },
    {
        id:5,
        name: 'Blood circulatory system',
        href: "./bloodCirculatorySystem"
    },
    {
        id:6,
        name: 'Urinary system',
        href: "./urinarySystem"
    },
    {
        id:7,
        name: 'Hair & skin',
        href: "./hairSkin"
    },
    {
        id:8,
        name: 'Reproductive system',
        href: "./reproductiveSystem"
    },
    {
        id:9,
        name: 'Liver disease',
        href: "./liverDisease"
    }
];

const services = [

    {
        id:1,
        name: 'Phone Consultation',
        href: "./phoneConsultation"
    },
    {
        id:2,
        name: 'Video Consultation',
        href: "./videoConsultation"
    },
    {
        id:3,
        name: 'Clinic Consultation',
        href: "./clinicConsultation"
    },
    {
        id:4,
        name: 'Buy Online Products',
        href: "./buyOnlineProducts"
    },
    {
        id:5,
        name: 'Ayurweda for Wellness',
        href: "./ayurwedaForWellness"
    },
    {
        id:6,
        name: 'Find prakurthi and Body Constitution',
        href: "./findPrakurthiAndBodyConsultation" //
    },
    {
        id:7,
        name: 'Yoga Meditation',
        href: "./yogaMeditation"
    },
    {
        id:8,
        name: 'Ayurweda Beauticulture',
        href: "./ayurwedaBeauticulture"
    },
    {
        id:9,
        name: 'Acupuncture and Cupping',
        href: "./acupunctureAndCupping"
    },
];

export default function page() {
  return (
    <div className='m-2  text-green-700'>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="./" className='pl-3'>
                <Image src={require('../../public/images/LogoForNavigationBar.png')} alt=""  width={100} /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{ color: '#FF0000' }}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">

                    <NavDropdown title="Diseases" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                        {diseases.map((disease) => (
                        <NavDropdown.Item key={disease.id} href={disease.href} className='no-underline hover:underline text-green-700'>{disease.name}</NavDropdown.Item>
                        ))}
                    </NavDropdown>

                    <Nav.Link href="./whyLakshmiAyurweda">Why Lakshmi Ayurweda</Nav.Link>

                    <NavDropdown title="Our Services" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                        {services.map((service) => (
                        <NavDropdown.Item key={service.id} href={service.href} className='no-underline hover:underline text-green-700'>{service.name}</NavDropdown.Item>
                        ))}
                    </NavDropdown>

                    <Nav.Link href="./contactUs" className=' '>Contact Us</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Button variant="outline-success" href='./bookAppointment'>Book Appointment</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}


//change color of the nav items