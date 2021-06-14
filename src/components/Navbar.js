import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
   return (
      <header>
         <div className="header__content">
            <Link to="/" className="logo" />
            <Link to='/' className="btn-bars" />
            <div className="facilities-nav">
               <div className="searchForm">
                  <div className="form-control">
                     <input
                        type="text"
                        placeholder="Tìm kiếm ..."
                     />
                     <button className="search" ></button>
                  </div>
               </div>
               <Link to='/' className="language">EN</Link>
            </div>
            <div className="navigation">
               <Link to="/" className="icon-home" ></Link>
               <nav>
                  <ul>
                     <li>
                        <Link to="/">PHIM</Link>
                     </li>
                     <li><Link to="/">LỊCH CHIẾU</Link></li>
                     <li><Link to="/">RẠP VÀ GIÁ</Link></li>
                     <li><Link to="/">KHUYẾN MÃI</Link></li>
                     <li><Link to="/">HỎI VÀ ĐÁP</Link></li>
                     <li><Link to="/">TIN TỨC</Link></li>
                     <li><Link to="/">GIỚI THIỆU</Link></li>
                     <li><Link to="/">LIÊN HỆ</Link></li>
                  </ul>
               </nav>
            </div>
         </div>
      </header>

   )
}
