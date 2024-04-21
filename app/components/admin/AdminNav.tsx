'use client'

import Link from 'next/link'
import { Container } from 'react-bootstrap'
import AdminNavItem from "./AdminNavItem"
import { usePathname } from 'next/navigation'
import {MdDashboard} from "react-icons/md"

const adminNav = () => {

    const pathname = usePathname ()

  return (
    <div className='w-full shadow-sm top-20 border-b-[1px] pt-4'>
        <Container>
            <div className='flex flex-row items-center justify-between md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap'>
                <Link href="/admin">
                    <AdminNavItem label="Products" icon={MdDashboard} selected={pathname === '/admin'} />
                </Link>
                <Link href="/admin">
                    <AdminNavItem label="Clinics" icon={MdDashboard} selected={pathname === '/admin'} />
                </Link>
                <Link href="/admin">
                    <AdminNavItem label="Doctors" icon={MdDashboard} selected={pathname === '/admin'} />
                </Link>
                <Link href="/admin">
                    <AdminNavItem label="Orders" icon={MdDashboard} selected={pathname === '/admin'} />
                </Link>
                <Link href="/admin">
                    <AdminNavItem label="Appointments" icon={MdDashboard} selected={pathname === '/admin'} />
                </Link>
            </div>
        </Container>
    </div>
  )
}

export default adminNav