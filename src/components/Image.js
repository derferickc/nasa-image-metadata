import React, { Component } from "react"
import {
  NavLink
} from "react-router-dom"

class Image extends Component {
  render() {
    const imageURL = this.props.imageURL
    const imageData = this.props.individualImageData
    const keywordArr = this.props.individualImageData.data[0].keywords
    
    return (
      <div className="image-page-wrapper">
        <div className="image-header">
          <NavLink to="/">
            <h1>Take me back to see other staff members!</h1>
          </NavLink>
        </div>

        {imageData.data.map((data) => (
          <div className="flex-wrapper" key={data.nasa_id}>
            <div className="col-12 col-sm-6 left">
              <img className="img-left" src={imageURL} alt={data.nasa_id}/>
              <div className="img-caption">{data.title}</div>
            </div>
            <div className="col-12 col-sm-6 right text-left">
              <p><strong>Description:</strong> {data.description}</p>
              <p><strong>Date Taken:</strong> {data.date_created}</p>

              { data.photographer &&
                <p><strong>Photographer:</strong> {data.photographer}</p>
              }
              { data.location &&
                <p><strong>Location:</strong> {data.location}</p>
              }

              <p><strong>NASA ID:</strong> {data.nasa_id}</p>
              <p><strong>Keywords: </strong>
                {keywordArr.map((keyword) => (
                  <span className="keyword-label" key={keyword}>{keyword}</span>
                ))}
              </p>
            </div>
          </div>
        ))}

      </div>
    )
  }
}
 
export default Image;