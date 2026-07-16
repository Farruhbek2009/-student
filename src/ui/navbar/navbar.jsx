import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
      <h2>Mahsulotlar</h2>
      <input type="text" placeholder='Mahsulot nomi yoki SKU boyicha qidiruv...' />
      <div className="icon">
        <img src="qongiroqcha.png" alt="" />
      </div>
    </div>
  )
}

export default Navbar