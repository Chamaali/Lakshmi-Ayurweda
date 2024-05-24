import AdminNav from "../components/admin/AdminNav"

export const metadata = {
    title: "Admin Dashboard"
}

const AdminLayout = ({children}: {children: React.ReactNode }) => {
  return (
    <div  className='bg-green-100'>
        <AdminNav />
        {children}
    </div>
  )
}

export default AdminLayout
