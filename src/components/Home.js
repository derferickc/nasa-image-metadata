import React, { Component } from "react"
import {
  NavLink
} from "react-router-dom"

class Home extends Component {
  render() {
  	const imageData = this.props.homeImageData

    return (
      <React.Fragment>
      	<h1>Please click on one of our NASA staff members below to learn more about them!</h1>
      	<div className="astronaut col-sm-4 offset-sm-4 col-8 offset-2 text-center">
      		<img src='https://i.pinimg.com/originals/4c/d8/68/4cd868ad8b0840a97ec012e5e31a43dc.jpg' alt="nasa-astronaut" />
      	</div>
		<table className="table">
			<tbody>
				{imageData.collection.items.map((data) => (
				
					<tr key={data.data[0].nasa_id}>
						<td className="col-sm-4 col-6">
							<img className="img-responsive" src={data.links[0].href} alt={data.data[0].nasa_id}/>
							<div className="caption">{data.data[0].title}</div>
						</td>
						<td className="col-sm-4 d-none d-sm-block">
							<p><span><strong>NASA ID: </strong>{data.data[0].nasa_id}</span></p>
							<p>{data.data[0].photographer === undefined
								? <span><strong>Photographer: </strong>Photographer Unknown</span>
								: <span><strong>Photographer: </strong>{data.data[0].photographer}</span>
							}</p>
						</td>
						<td className="col-sm-4 col-6">
							<div>{data.data[0].description.substring(0,300)}</div>
							<NavLink to={`/image/${data.data[0].nasa_id}`}>
								<div className="learnmore-cta">LEARN MORE</div>
							</NavLink>
						</td>
					</tr>

				))}
			</tbody>
		</table>
      </React.Fragment>
    )
  }
}
 
export default Home;