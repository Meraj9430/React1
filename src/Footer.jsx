// import React from 'react'
import facebook from"./assets/facebook.svg"
import whatsaap from "./assets/Whataap.svg"
import insta from "./assets/Instagram.svg"
import twi from "./assets/twitter.svg"
import appStore from "./assets/AppStore.svg"
import play from "./assets/PlayStore.svg"


const Footer = () => {
  return (
    <footer>
    <div id="footer-body">
        <div className="footer-box">
            <div className="foot-header">
                <span>Doc Search</span>
            </div>
            <div>
                <ul className="foot-ul">
                    <li>About</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
        <div className="footer-box">
            <div className="foot-header">

                <span>For patients</span>
            </div>
            <div>

                <ul className="foot-ul">
                    <li>Search for doctors</li>
                    <li>Search for hospital</li>
                    <li>Search medical shop</li>
                    <li>Book lab test</li>
                    <li>Book full body checkups</li>
                    <li>Doc Search health care plan</li>
                </ul>
            </div>
        </div>
        <div className="footer-box">
            <div className="foot-header">

                <span>For doctors</span>
            </div>
            <div>

                <ul className="foot-ul">
                    <div>
                        <li> Doc Registration form</li>
                        <li>Doc Search consult</li>
                        <li>Doc Search health feed</li>
                        <li>Doc Dearch profile</li>
                    </div>

                </ul>
            </div>
            <div className="foot-header">
                <span>For Lab</span>
            </div>
            <div>

                <ul className="foot-ul">
                        <li>Lab Registration form </li>
                        <li>Doc Search consult</li>
                        <li>Doc Search health feed</li>
                        <li>Doc Dearch profile</li>
                </ul>
            </div>
        </div>
        <div className="footer-box">
            <div className="foot-header">
                <span >For Hospital</span>
            </div>
            <div>
                <ul className="foot-ul">
                    <li>Doc Search consult  </li>
                    <li>Doc Search health feed</li>
                    <li>Doc Dearch profile </li>
                    <li>Hospital Registration form</li>  
                </ul>
            </div>
            <div className="foot-header">
                <span >For Medicals</span>
            </div>
            <div>
                <ul className="foot-ul">
                    <li>Medical Registration form </li>
                    <li>Doc Search consult</li>
                    <li>Doc Search health feed</li>
                    <li>Doc Dearch profile</li>  
                </ul>
            </div>
        </div>
        <div className="footer-box">
            <div className="foot-header">
                <span >For Medicals</span>
            </div>
            <div>

                <ul className="foot-ul">
                    
                    
                    <li>Medical Registration form  </li>
                    <li>Doc Search consult</li>
                    <li>Doc Search health feed</li>
                    <li>Doc Dearch profile</li>
                    
                    
                </ul>
            </div>
        </div>
        <div className="footer-box">
            <div className="foot-header">

                <span >More</span>
            </div>
            <div>
                <ul className="foot-ul">
                        <li>Help </li>
                        <li>Develop</li>
                        <li>Privacy policy</li>
                        <li>Terms and condition</li>
                </ul>
            </div>
        </div>
        <div className="footer-box">
            <ul className="foot-ul" >
                <p className="foot-header">Social</p>
                <div style={{display: 'flex', gap: '25px'}}>

                    <li><img src={facebook} alt=""/></li>
                    <li><img src={whatsaap} alt=""/></li>
                    <li><img src={insta} alt=""/></li>
                    <li><img src={twi} alt=""/></li>
                </div>
            </ul>
            <div className="foot-logo">
             <p className="foot-header">Download App</p>
             <div style={{display: "flex", gap: "10px"}}>
                <img src={appStore} alt=""/>
                <img src= {play} alt=""/>
             </div>
            </div>
        </div>

    </div>

</footer>
  )
}

export default Footer
