import React from 'react'
import Second from '../smartphone-balancing-with-pink-background_23-2150271746.avif'

const Home = () => {
  return (
    <div>
    
      <h1>Home</h1>
      <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={Second} height={"80px"} />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    >
                        Add To Cart</button>
                </div>
            </div>
    
    </div>
  )
}

export default Home