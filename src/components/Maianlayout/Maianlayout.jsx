import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';
export default function Maianlayout() {
  return (
<>
<Navbar/>
<Outlet>
</Outlet>
<Footer/>
</>
)
}
