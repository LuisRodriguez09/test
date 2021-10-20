import React, { useState } from 'react';
import { Bookings } from '../modal/Bookings';

export const Navbar = () => {


	const [modal, setModal] = useState(false);

	const Toggle = () => setModal(!modal);

	return (
		<div className="container">

			<header className="navbar__header">
				<h2 className="navbar__logo">TrueHome Vuelos</h2>
				<nav>
					<ul className="nav__links">
					</ul>
				</nav>
				<a className="cta" href="/#">
					<button
						className="navbar__button"
						onClick={() => Toggle()}
					>
						Mis Reservas
					</button>
				</a>

				{modal && (
					<Bookings show={modal} close={Toggle} title="Mis vuelos reservados" />
				)}
			</header>

		</div>
	);
};
