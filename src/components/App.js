import React, { Component } from "react"
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'
import Home from './Home'
import Image from './Image'
import Notfound from './Notfound'
import '../App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
	TransitionGroup,
	CSSTransition
} from 'react-transition-group'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			imageData: ''
		}
	}

	componentDidMount() {
		const apiUrl = 'https://images-api.nasa.gov'
		let fetchQuery = `${apiUrl}/search?q=dog&media_type=image`

		fetch(fetchQuery)
	        .then(response => response.json())
	        .then(
				(result) => {
					this.setState({
						imageData : result,
					});
				}
	        )
	        .catch(error => console.log(error))
	}

	render() {
		const { imageData } = this.state

		return (
			<BrowserRouter>
				<Route render={({ location }) => (
					<div className="container text-center">
						<div className="row">
							<div className="header col-12 text-right">
								<NavLink to="/">
									<div className="header-flex-wrapper">
										<div className="image">
											<img src="https://firebasestorage.googleapis.com/v0/b/nasa-image-metadata.appspot.com/o/nasa_logo.png?alt=media&token=ba2231d8-0762-4f3f-aef2-8e3717e58f12" alt="nasa logo"/>
										</div>

										<div className="copy d-none d-sm-block">
											NASA Image and<br />
											Video Library
										</div>
									</div>
								</NavLink>
							</div>

						{imageData &&
							<div className='partial col-12'>
								<TransitionGroup>
									<CSSTransition
										key={location.key}
										timeout={300}
										classNames='fade'
										exit={false}
									>
										<Switch>
											<Route exact={true} path="/"
												render={(props) =>
													<Home {...props}
													homeImageData={imageData}
												/>}
											/>

										{imageData.collection.items.map((data, index) => (
											<Route
												path={`/image/${data.data[0].nasa_id}`}
												render={(props) =>
													<Image {...props}
														individualImageData={imageData.collection.items[index]}
														imageURL={data.links[0].href}
													/>
												}
												key={data.data[0].nasa_id}
											/>
										))}
											<Route component={Notfound}/>
										</Switch>
									</CSSTransition>
								</TransitionGroup>
							</div>
						}

						</div>
					</div>
				)} />
			</BrowserRouter>
		)
	}
}

export default App;
