import React, { Component } from "react"
import {
  NavLink
} from "react-router-dom"

class Notfound extends Component {
  render() {
    
    return (
      <div className="notfound-image-page-wrapper">
        <div className="image-header col-12">
          <h1>Whoa... we got lost in space</h1>
          <img src="https://media.giphy.com/media/xDQ3Oql1BN54c/giphy.gif" alt="floating doge"/>
        </div>
        <NavLink to="/">
          <div className="learnmore-cta-earth">BACK TO EARTH</div>
        </NavLink>
      </div>
    )
  }
}
 
export default Notfound;