
import React, { useState, Component } from "react";
import styles from "./LandingPage.module.css"
import Break from "./Break.jsx";
import { Route, Switch, Link } from 'react-router-dom';
import { SearchBuses } from "./SearchBuses";
import {Footer} from '../Footer/Footer'
import "../available-bus/Buses"
import { place } from "./fetch";
import { axios } from "axios";
import { Form } from "./Form";
import styled from "styled-components";

const LandingPage = () => {

  const [placeList, setPlaceList] = useState([]);
    const handleAddForm = (place) => {
        setPlaceList([...placeList, place])
    }
   
  return (
    <div>   
      <div className={styles.welcome_image}>
        <Form handleAddForm={handleAddForm}></Form>
       
        <div className={styles.natak}>
          <img src="https://t3.ftcdn.net/jpg/04/84/73/60/240_F_484736065_Iq4PIgHO5Gv2YEBUAEKmARcwI0bcdC6I.jpg" alt="img" />
          <div className={styles.prompt_a}>  <div className={styles.prompt1}>Welcome to Raahi</div> <div className={styles.prompt2}>Stay Tuned</div> </div>
        </div>
      </div>
     
      <br /><br /><br /><br /><br />
     
      <Break />

      <div className={styles.pict}>

        <div>

          <div className={styles.pic}>
            <div className={styles.text1} >
              <div className={styles.heading1}>
                Convenience On-the-go.
              </div>
              <br />
              
              <div ><br />
              

                <div  >
                  
                </div>
                <br />
              </div>
              <div >
                <span>
            <img src="https://psgroup.in/blog/wp-content/uploads/2019/01/Kolkata_City_skyline_from_Hoogly_bridge.jpg"></img>

                </span>

              </div>
              

            </div>
          </div>
          <div className={styles.pic1} >
            <img src="//s1.rdbuz.com/web/images/home/IOS_Android_device.png" alt="" />

          </div>
        </div>
        <div className={styles.bgImgCont}>
          <img className={styles.bg_img} src="http://s2.rdbuz.com/web/images/home/city_scape_app_download.png" alt="" />
        </div>

      </div>

      <div className={styles.prms}>
        <div className={styles.ig}><img src="https://s1.rdbuz.com/web/images/home/promise.png" alt="rdbuz" /></div>

        <div className={styles.prms1}>we promise to deliver</div>
        <br />
        <div>
          <div className={styles.prms3}>
            <div className={styles.prms2}>
              <div styles={styles.ig3}><img src="https://s3.rdbuz.com/Images/safety/srp/safety.svg" alt="imag" /></div>
              <br />
              <div className={styles.txt}>SAFETY+</div>
              <br />
              <div className={styles.text2} >With Safety+ we have brought in a set of measures like Sanitized buses, mandatory masks etc. to ensure you travel safely.</div>
            </div>

            <div className={styles.prms2}>
              <div styles={styles.ig3}><img src="https://s1.rdbuz.com/web/images/home/customer_care.png" alt="imag" /></div>
              <br />
              <div className={styles.txt}>SUPERIOR CUSTOMER SERVICE</div>
              <br />
              <div className={styles.text2} >We put our experience and relationships to good use and are available to solve your travel issues.</div>
            </div>



            <div className={styles.prms2}>
              <div styles={styles.ig3}><img src="https://s2.rdbuz.com/web/images/home/benefits.png" alt="imag" /></div>
              <br />
              <div className={styles.txt}>UNMATCHED BENEFITS</div>
              <br />
              <div className={styles.text2} c>We take care of your travel beyond ticketing by providing you with innovative and unique benefits.</div>
            </div>
          </div>
        </div>
      </div>
      <br />
      
      <div>
        <div className={styles.flags}>
          <h1>WE ARE IN KOLKATA</h1>
          <img src="https://www.orfonline.org/wp-content/uploads/2021/04/Reimagining-Kolkata-1280x720.jpg"></img>
        </div>

      </div>


      


      <div className={styles.bckgrd}>
        <div className={styles.bus}>
          <div className={styles.left} >
        
          </div>
          <div className={styles.left}>
            
          </div>
          <div className={styles.left}>
            
          </div>

          <div className={styles.left}>

            
          </div>
          
        </div>
        
        {/* <Footer/> */}
      </div>




    </div>
  )


  }



export { LandingPage }