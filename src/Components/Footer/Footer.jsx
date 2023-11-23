import "./Footer.css"

export const Footer=()=>{
    return(
        <div>
            <div className="footer">
                <div className="footer-sub">
                    <div className="footer-Left">
                         <div>
                             <ul>
                                 <p>About redBus</p>
                                 <li><a href="">About Us</a></li>
                                 <li><a href="">Contact Us</a></li>
                                
                             </ul>
                         </div>
                         <div>
                             <ul>
                                 <p>About redBus</p>
                                 <li><a href="">T & C</a></li>
                                 <li><a href="">Privacy Policy</a></li>
                                 <li><a href="">FAQ</a></li>
                                 <li><a href="">Blog</a></li>
            
                             </ul>
                         </div>
                         <div>
                             <ul>
                                 <p> Team</p>
                                 <li><a href="">Sneha Kedia</a></li>
                                 <li><a href="">Tamanna Nasrin</a></li>
                                 <li><a href="">Abhishek Kumar Singh</a></li>
                                 <li><a href="">Rishab Poddar</a></li>
                                
                             </ul>
                         </div>
                
                    </div>
                    <div className="footer-Right">
                               <a href="">
                                   <span ><img style={{width:"86px"}} src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" alt="" /></span>
                               </a>
                               <a href="">
                                   <span  ><img style={{width:"50px" ,color:"#d7d7d7"}} src="https://www.svgrepo.com/show/11841/twitter.svg" alt="" /></span>
                               </a>
                           </div>
                           <div style={{float:"left" ,marginTop:"15px"}}>
                               <span>Ⓒ</span>
                               <span>2023 All rights reserved</span>
                           </div>
                    </div>
                </div>
            </div>
        
    )
}