import React, { Component } from "react"
import {
  NavLink
} from "react-router-dom"
import Modal from "react-bootstrap/Modal"
import 'bootstrap/dist/css/bootstrap.min.css'

class Home extends Component {
	constructor(props) {
    super(props);
    this.state = {
      activeModal: null
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  
  clickHandler(e, index) {
    this.setState({
      activeModal: index
    })
  }

  hideModal() {
    this.setState({
      activeModal: null
    })
  }

	render() {
		const imageData = this.props.homeImageData

		return (
			<React.Fragment>
				

				<h1>Please click below to learn more about one of our NASA staff members!</h1>
				<div className="astronaut col-sm-4 offset-sm-4 col-8 offset-2 text-center">
					<img src='https://i.pinimg.com/originals/4c/d8/68/4cd868ad8b0840a97ec012e5e31a43dc.jpg' alt="nasa-astronaut" />
				</div>
				<table className="table">
					<tbody>
						{imageData.collection.items.map((data, index) => (
						
						<tr key={data.data[0].nasa_id}>
							<td className="col-sm-4 col-6">
								<img className="img-responsive" src={data.links[0].href} alt={data.data[0].nasa_id}/>
								<div className="caption">{data.data[0].title}</div>
							</td>
							<td className="col-sm-4 d-none d-sm-block">
								<p><span><strong>NASA ID: </strong>{data.data[0].nasa_id}</span></p>
								<p>{data.data[0].photographer &&
									<span><strong>Photographer: </strong>{data.data[0].photographer}</span>
								}</p>
							</td>
							<td className="col-sm-4 col-6">
								<div>{data.data[0].description.substring(0,300)}</div>
								
                <div>
                  <NavLink to={`/image/${data.data[0].nasa_id}`}>
  									<div className="learnmore-cta">LEARN MORE PAGE</div>
  								</NavLink>
                </div>

                <div onClick={e => this.clickHandler(e, index)} className="learnmore-cta-earth">
                  LEARN MORE MODAL
                </div>

                <Modal show={this.state.activeModal === index} onHide={this.hideModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>{data.data[0].title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="modal-body-wrapper col-12">
                      <img className="img-responsive" src={data.links[0].href} alt={data.data[0].nasa_id} />
                      <p><strong>Description:</strong> {data.data[0].description}</p>
                      <p><strong>Date Taken:</strong> {data.data[0].date_created.substring(0, 10)}</p>

                      { data.data[0].photographer &&
                        <p><strong>Photographer:</strong> {data.data[0].photographer}</p>
                      }
                      { data.data[0].location &&
                        <p><strong>Location:</strong> {data.data[0].location}</p>
                      }

                      <p><strong>NASA ID:</strong> {data.data[0].nasa_id}</p>
                      
                      { data.data[0].keywords &&
                        <p><strong>Keywords: </strong>
                          {data.data[0].keywords.map((keyword) => (
                            <span className="keyword-label" key={keyword}>{keyword}</span>
                          ))}
                        </p>
                      }
                      
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <div className="learnmore-cta-earth" onClick={this.hideModal}>Close</div>
                  </Modal.Footer>
                </Modal>

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