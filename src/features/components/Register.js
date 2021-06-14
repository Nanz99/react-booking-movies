import React from 'react'
import iconRegister from '../../assets/images/icon-register.png'
import iconLogin from '../../assets/images/icon-login.png'
import iconCall from '../../assets/images/icon-call.png'
import { Link } from 'react-router-dom'


export default function Register() {
   return (
      <section className="register">
         <div className="register__content">
            <ul>
               <li><Link to="/">
                  <img src={iconRegister} alt="" /><span>Đăng ký</span></Link></li>
               <li>
                  <Link to="/"><img src={iconLogin} alt="" /><span>Đăng nhập</span></Link></li>
            </ul>
            <Link to="/" className="hotline">
               <img src={iconCall} alt="" />
               <span>028 7300 8881</span></Link>
         </div>
      </section>
   )
}
