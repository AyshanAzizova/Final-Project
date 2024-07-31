import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <ul className='admin_nav'>
    <li><Link to='/admin/orders'>Orders</Link></li>
    <li><Link to='/admin/customers'>Customers</Link></li>
    <li><Link to='/admin/products'>products</Link></li>
    <li><Link to='/admin/addProduct'>AddProduct</Link></li>

    </ul>
  )
}

export default AdminNavbar
