import React, { useState } from 'react';
import { Bookings } from '../modal/Bookings';

export const Navbar = () => {


	const [modal, setModal] = useState(false);

	const Toggle = () => setModal(!modal);

	return (
		<div className="container">

			<header className="navbar__header">
				<img alt="img" className="navbar__logo" src="https://media.jtdwjcwq6f4wp4ce.com/y4/logos/y4-large-default.svg" />
				<nav>
					<ul className="nav__links">
						<li className="navbar__li"> <a className="navbar__a" href="#" >Iniciar Sesión</a></li>
						<li className="navbar__li"> <a className="navbar__a" href="#" >Registrarme</a></li>

					</ul>
				</nav>
				<a className="cta" href="#">
					<button
						className="navbar__button"
						onClick={() => Toggle()}
					>
						Mis Reservas
					</button>
				</a>

				<Bookings show={modal} close={Toggle} title="Mis vuelos reservados" />

			</header>

		</div>
	);
};
