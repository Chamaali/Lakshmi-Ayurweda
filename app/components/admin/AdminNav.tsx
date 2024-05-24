"use client";

import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import AdminNavItem from "./AdminNavItem";
import { usePathname } from "next/navigation";
import { MdDashboard } from "react-icons/md";

const adminNav = () => {
  const pathname = usePathname();
  // const isSelected = true;
  return (
    <div className="shadow-lg p-3">
      <Container className="">
        <div className="flex justify-between ">
          <div className="bg-red-100">
            <Nav.Link href="./../../admin/products" className="bg-red-100">
              Products
            </Nav.Link>
          </div>

          <div className="text-black text-lg">
            <Nav.Link href="./../../admin/clinics">Clinics</Nav.Link>
          </div>

          <div>
            <Nav.Link
              href="./../../admin/doctors"
              className='@GetActive("./../../admin/doctors")'
            >
              Doctors
            </Nav.Link>
          </div>

          <div>
            <Nav.Link href="./../../admin/doctors">Doctors</Nav.Link>
          </div>
          <div>
            <Nav.Link href="./../../admin/doctors">Doctors</Nav.Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default adminNav;
