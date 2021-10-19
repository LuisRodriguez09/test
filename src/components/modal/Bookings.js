import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FormPayment } from '../../components/modal/FormPayment';

export const Bookings = ({ show, close, title }) => {

	let reservas = JSON.parse(localStorage.getItem("reservas") || "[]");
	const [reserva, setReserva] = useState([...reservas]);

	const handleDelete = (e) => {
		localStorage.clear();
		const newArray = reserva.filter(reserva => `${reserva.originCity}-${reserva.destinyCity}` !== e.target.value);
		setReserva(newArray);
		localStorage.setItem("reservas", JSON.stringify(newArray));
	};

	const handleEmpty = () => {
		localStorage.clear();
		Swal.fire('Success', "Carrito vaciado", 'info');
		close();
	};

	const [modal2, setModal] = useState(false);

	const Toggle2 = () => {
		if (reservas.length <= 0) {
			setModal(false);
			Swal.fire('Error', "No hay reservas en el carrito", 'info');
		} else {
			setModal(!modal2);
		}

	};

	function removeDuplicates(originalArray, prop) {
		var newArray = [];
		var lookupObject = {};

		for (var i in originalArray) {
			lookupObject[originalArray[i][prop]] = originalArray[i];
		}

		for (i in lookupObject) {
			newArray.push(lookupObject[i]);
		}
		return newArray;
	}

	const uniqueArray = removeDuplicates(reserva, "id");

	let finalPrice = 0;
	uniqueArray.map((price) => finalPrice += price.price);
	console.log(finalPrice);

	return (
		<>
			{
				show ?
					<div
						className="modalContainer"
						onClick={() => close()}
					>
						<div className="modal" onClick={(e) => e.stopPropagation()}>
							<header className="modal_header">
								<h2 className="modal_header-title"> {title} </h2>
								<button className="close" onClick={() => close()}>
									<i class="fa fa-times" aria-hidden="true"></i>
								</button>
							</header>
							<main className="modal_content">
								<table>
									<tbody>
										<tr>
											<th>ID</th>
											<th>Origen</th>
											<th>Destino</th>
											<th>Partida</th>
											<th>Regreso</th>
											<th>No. Pasajeros</th>
											<th>Precio</th>
											<th>Editar</th>
										</tr>

										{
											uniqueArray.map((reserva, index) => (
												<tr key={index}>
													<td>{index}</td>
													<td>{reserva.originCity}</td>
													<td>{reserva.destinyCity}</td>
													<td>{reserva.departureDate}</td>
													<td>{reserva.returnDate}</td>
													<td>{reserva.passengers}</td>
													<td>{reserva.price}</td>
													<td className="edit__booking">
														<button className="booking__button" value={`${reserva.originCity}-${reserva.destinyCity}`} onClick={(e) => handleDelete(e)}>Eliminar</button>
													</td>
												</tr>
											))
										}
									</tbody>
								</table>
								<div className="booking__price-box">
									<p className="booking__price">$MXM {finalPrice}</p>
								</div>
							</main>
							<footer className="modal_footer">
								<button
									className="modal-close" onClick={() => close()}>
									Volver
								</button>

								<button className="submit" onClick={handleEmpty} >Vaciar carrito</button>
								<button className="submit" onClick={() => Toggle2()} >Pagar</button>

							</footer>
						</div>
					</div>
					: null
			}
			<FormPayment show={modal2} close={Toggle2} title="Rellene sus datos" />
		</>
	);
};
