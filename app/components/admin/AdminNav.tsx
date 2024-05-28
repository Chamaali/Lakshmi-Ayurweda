"use client";

import Link from "next/link";
import { Container } from "react-bootstrap";
import { useRouter } from "next/navigation"; // Correct import for useRouter

const AdminNav = () => {
  const router = useRouter();
  const { pathname } = router;

  const items = [
    {
      title: "Products",
      href: "/admin/products",
    },
    {
      title: "Clinics",
      href: "/admin/clinics",
    },
    {
      title: "Doctors",
      href: "/admin/doctors",
    },
    {
      title: "Appointments",
      href: "/admin/appointments",
    },
    {
      title: "Users",
      href: "/admin/users",
    },
  ];

  return (
    <div className="shadow-lg p-3">
      <Container>
        <div className="d-flex justify-content-between text-lg font-bold text-green-700">
          {items.map(({ title, href }) => (
            <Link legacyBehavior key={title} href={href} passHref>
              <a
                className="no-underline text-green-800 py-2 px-3 rounded active:bg-green-800 active:text-white"
              >
                {title}
              </a>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AdminNav;
