import React, { useEffect, useState } from "react";
import { render } from "react-dom"; 
import "./Pokemones.css";

import json from './pokemones.json';

let pokemones = json; 

class Pokemones extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			buscarString: "",
			pokemones: []
		};
		this.manejarBusqueda = this.manejarBusqueda.bind(this);
		this.search = React.createRef();

	} 

	componentDidMount() {
		this.setState({
			pokemones: pokemones
		});
		this.search.current.focus(); 
	}

	manejarBusqueda() {
		this.setState({
			buscarString: this.search.current.value
		});
	}

	render() {
		let pokes = this.state.pokemones;
		let search = this.state.buscarString.trim().toLowerCase(); 

		if (search.length > 0) {
			pokes = pokes.filter(function(pokemon) {
				return pokemon.nombre.toLowerCase().match(search); 
			})
		}

	return(

		<div className="container cont">

			<div className="row"> 

				<div className="col-md-12">

				<h1>Buscador de Pokemones con React JS 16.13.1 </h1>

				<input
					type="text"
					className="form-control"
					value={this.state.buscarString}
					ref={this.search}
					onChange={this.manejarBusqueda}
					placeholder="Ejemplo: Charmander"
				/>

				</div>

			</div>

			<div className="row mt-3">

				{pokes.map(p => {
				

				return(

					<div className="col-md-4" key={p.id}>

						<div className="card mb-3">

							<img className="card-img-top" src={`${process.env.PUBLIC_URL}/img/${p.img}`} alt={p.nombre} className="img-fluid" />

							<div className="card-body">

								<h3 className="card-title mb-3">{p.nombre}</h3>

								<p className="card-text">

									<strong>Tipo:</strong> {p.tipo}

								</p>

								<p className="card-text">

									<strong>Fortaleza:</strong> {p.fortaleza}

								</p>

								<p className="card-text">

									<strong>Debilidad:</strong> {p.debilidad}

								</p>

							</div>

						</div>


					</div>


				)


				})}


		  	</div>

		</div>

	);


	}


}

export default Pokemones;
