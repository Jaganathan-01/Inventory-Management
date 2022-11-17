import React from 'react'
import "./slider.css"

const Slider = () => {
  return (
  
    <div className='hello' > 
      <div class="banner1">
     
        <img className='image' src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8TEFQVE9QfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
      
        <div class="text-box text1">
            <h1>INVENTORY MANAGEMENT SYSTEM</h1>
            <span></span>
            <p>IT'S HELPS COMPANIES IDENTIFY WHICH AND HOW MUCH STOCK TO ORDER AT WHAT TIME.</p>

        </div>
    </div>



    <div class="banner2">
     
        <img className='image'
            src="https://images.unsplash.com/photo-1577769992132-b34463eba932?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"/>
    
        <div class="text-box text2">
            <h1>VISION</h1>
            <span></span>
            <p>HELPS FOR MANUFACTURES, DISTRIBUTORS,RETAILERS</p>

        </div>
    </div>



    <div class="banner3">
    
        <img className='image' src="https://images.unsplash.com/photo-1560221328-12fe60f83ab8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"/>
  
         <div class="text-box text3">
        <h1>EFFICIENCY</h1>
        <span></span>
        <p>IMPROVE ACCURACY OF INVENTORY ORDERS.</p>

    </div>
    </div>
      
    </div>
  )
}

export default Slider;
