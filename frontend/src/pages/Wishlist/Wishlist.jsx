import React from 'react'
import './Wishlist.css'

const Wishlist = () => {
  return (
    <div className='container'>
      <h1>Wishlist</h1>
      <table>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
      <tr>
        <td>alma</td>
        <td>50</td>
        <td>in stock</td>

      </tr>
      </table>
    </div>
  )
}

export default Wishlist
