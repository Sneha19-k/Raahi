

import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import "./break.css"
export default class Break extends Component{
state ={
  items:[
    {id:1,tit:"Coming Soon",tit2:"",url:"https://www.nopcommerce.com/images/thumbs/0005720_coming-soon-page_550.jpeg"},
    {id:2,tit:"Coming Soon",tit2:"",url:"https://www.nopcommerce.com/images/thumbs/0005720_coming-soon-page_550.jpeg"},
     {id:3,tit:"Coming Soon",tit2:"",url:"https://www.nopcommerce.com/images/thumbs/0005720_coming-soon-page_550.jpeg"},
    {id:4,tit:"Coming Soon",tit2:"",url:"https://www.nopcommerce.com/images/thumbs/0005720_coming-soon-page_550.jpeg"},
     {id:3,tit:"Coming Soon",tit2:"",url:"https://www.nopcommerce.com/images/thumbs/0005720_coming-soon-page_550.jpeg"},
    {id:4,tit:"Coming Soon",tit2:"",url:"https://www.nopcommerce.com/images/thumbs/0005720_coming-soon-page_550.jpeg"}
  ]
}
  render(){
    const {items} =this.state;
    const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1024, itemsToShow: 3 },
]; 
  return(
    
        <Carousel breakPoints={breakPoints}>
        {items.map(item => <div key={item.id} className="div divq" > <p>{item.tit}</p> <img src={item.url} alt="imss"/> <p>{item.tit2}</p> </div>)}
        </Carousel>

  )
}

}