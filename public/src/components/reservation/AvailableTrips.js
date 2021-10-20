import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { saveHour, saveReservation } from '../../actions/reservation';
import { setShowTrip } from '../../actions/show';
import { useForm } from '../../hooks/useForm';


export const AvailableTrips = ({ city1, city2, departureDate, returnDate, passengers, price }) => {

	const form = useSelector(state => state.available);
	const query = form.availableCities.available;
	const dispatch = useDispatch();
	const [values, handleInputChange] = useForm({});
	const { opt } = values;

	const handleSubmit = () => {
		if (!opt) {
			Swal.fire('Error', 'Selecciona un horario', 'error');
			return;
		}
		dispatch(saveReservation(query));
		const reservas = JSON.parse(localStorage.getItem("reservas") || "[]");
		var reserva = query;
		reservas.push(reserva);
		localStorage.setItem("reservas", JSON.stringify(reservas));
		dispatch(setShowTrip(false));
		dispatch(saveHour(values));
		Swal.fire('Succes', 'Vuelo reservado!', 'success');
	};
	return (
		<>
			<div className="available__trips">

				<div className="available__top">
					<span>
						<h3 className="avaialable__h3">{city1} - {city2} </h3>
					</span>

					<span className="available__span">
						<p>Fecha de ida: {departureDate} </p>
						<p>Fecha de Regreso: {returnDate} </p>
					</span>

					<span>
						<h3>MXN$ {price}</h3>
					</span>
				</div>
				<div className="available__buttom">
					<div className="available__left">
						<p>Selecciona el horario</p>
						<div className="available__box">
							<input type="radio" name="hour" className="available__radio" name="opt" value="4:00 - 6:00" onChange={handleInputChange} />
							<label>4:00 - 6:00</label>
						</div>
						<div className="available__box">
							<input type="radio" name="hour" className="available__radio" name="opt" value="6:00 - 8:00" onChange={handleInputChange} />
							<label>6:00 - 8:00</label>
						</div>
						<div className="available__box">
							<input type="radio" name="hour" className="available__radio" name="opt" value="10:00 - 12:00" onChange={handleInputChange} />
							<label>10:00 - 12:00</label>
						</div>
						<div className="available__box">
							<input type="radio" name="hour" className="available__radio" name="opt" value="14:45 - 16:45" onChange={handleInputChange} />
							<label>14:45 - 16:45</label>
						</div>
						<div className="available__box">
							<input type="radio" name="hour" className="available__radio" name="opt" value="16:30 - 18:30" onChange={handleInputChange} />
							<label>16:30 - 18:30</label>
						</div>
					</div>
					<div>
						<button
							className="available__button-style"
							onClick={handleSubmit}
						>
							Reservar
						</button>
					</div>

				</div>

			</div>
		</>
	);
};
