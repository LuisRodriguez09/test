import React, { useState } from "react";
import { Bookings } from "../modal/Bookings";
import { useSelector, useDispatch } from "react-redux";
import { setShowBooking } from "../../actions/show";

export const Navbar = () => {
	const show = useSelector((state) => state.show);
	const dispatch = useDispatch();
	const [modal, setModal] = useState(show.setShowBooking);

	const Toggle = () => {
		setModal(!modal);
		dispatch(setShowBooking(true));
	};
	return (
		<div className="container">
			<header className="navbar__header">
				<h3 className="navbar__logo">TrueHome Vuelos</h3>
				<nav>
					<ul className="nav__links">
						{/* <li className="navbar__li"> <a className="navbar__a" href="/#" >Iniciar Sesión</a></li>
						<li className="navbar__li"> <a className="navbar__a" href="/#" >Registrarme</a></li> */}
					</ul>
				</nav>
				<a className="cta" href="/#">
					<button className="navbar__button" onClick={() => Toggle()}>
						Mis Reservas
					</button>
				</a>

				{modal && (
					<Bookings
						show={modal}
						close={Toggle}
						title="Mis vuelos reservados"
					/>
				)}
			</header>
		</div>
	);
};
