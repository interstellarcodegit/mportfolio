import React from "react"
import ReactDOM from "react-dom"
const main = document.querySelector("#main");
const Main =()=>{
    return (
        <div className="main">
            <Nav/>
            <canvas id="bg"></canvas>
           
        </div>
    )
}
const NavComponent= (props)=>{
    return(
        <li>
<a className="link" href="#"> <i className={props.icon}></i> {props.name}</a>
                </li>
    )
}
const Nav= ()=>{
    return(
        <nav className="mn-navigator">

            <img  src="../log.png"/>
         
            <ul className="nav_links">
                <NavComponent name="Home"icon="fa fa-home"/>

                <NavComponent  name="Download" icon="fa fa-download"/>

                <NavComponent name="Contact" icon="fa fa-phone"/>
                <NavComponent   name="Order" icon="fa fa-envelope"/>

            </ul>
            <div className="burger">

            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            </div>
        </nav>

    )
}
ReactDOM.render(<Main/>, main)

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav_links");
const nav_links = document.querySelectorAll(".nav_links li")
function navSlide() {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav_active");
    nav_links.forEach((link,index) => {
        if (link.style.animation){
          link.style.animation=""
        }
      else{
          link.style.animation=`navLinkFade 0.5s ease forwards ${index/5  +0.5 }s`
      }
       
    });
    burger.classList.toggle("toggle")
  });

}
navSlide();
console.log(nav_links)