import React from 'react'
import img from './assets/banner.jpg'
const App = () => {
  return (
    <div>
    <section className="sub-header">
        <nav>
            <img src={img} alt="Aify logo"/>
            <div className="nav-links" id="navLinks">
                <i className="fa fa-times" onclick="hideMenu()"/>
            <ul>
                <li><a href="">HOME</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">COURSES</a></li>
                <li><a href="">BLOG</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>
            </div>
            <i className="fa fa-bars" onclick="showMenu()"></i>
        </nav>
        <h1>ABOUT US</h1>
    </section>
    {/* <!-- about us content --> */}
     <section className="about-us">
        <div className="row">
            <div className="about-col">
                <h1>We are the best in Owerri</h1>
                <p>At Aify Fashion Academy, we believe fashion is more than clothing — it’s a language of self-expression, creativity, and innovation.<br/> Founded with a passion for empowering aspiring designers, stylists, and fashion entrepreneurs, our academy is dedicated to nurturing talent and shaping the future of fashion.</p>
                <a href="" className="hero-btn red-btn">EXPLORE NOW</a>
            </div>
            <div className="about-col">
                <img src={img} alt="About Us"/>
            </div>
        </div>
     </section>

       {/* <!-- Footer --> */}
        <section className="footer">
            <h4>About Us</h4>
            <p>Aify Fashion Academy is a dedicated fashion training institution committed to nurturing creativity, <br/>developing practical skills, and empowering fashion desigbers to build successful careers in the fashion industry.</p>
            <div className="icons">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-whatsapp"></i>
                <i className="fa fa-tiktok"></i>
                <i className="fa fa-instagram"></i>
            </div>
            <p>Made with   <i className="fa fa-heart-o"></i>By JullyMaya</p>
        </section>

    </div>
  )
}

export default App
