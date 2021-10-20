import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { availableSave } from "../../actions/available";
import Swal from "sweetalert2";
import { startGetCities } from "../../actions/cities";
import { useForm } from "../../hooks/useForm";
import { getAvailable } from "../../helpers/getAvailable";
import { setShowTrip } from "../../actions/show";

export const Form = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(startGetCities());
	}, [dispatch]);

	const state = useSelector((state) => state.reservation);

	const [values, handleInputChange, reset] = useForm({
		originCity: "",
		destinyCity: "",
		departureDate: "",
		returnDate: "",
		passengers: "",
	});

	const { originCity, destinyCity, departureDate, returnDate, passengers } =
		values;

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (
			!originCity ||
			!destinyCity ||
			!departureDate ||
			!returnDate ||
			!passengers
		) {
			Swal.fire("Error", "Rellene todos los campos", "error");
			return;
		}
		reset();
		const [{ id, available }] = await getAvailable(originCity);
		const resultFilter = available.filter((city) => city === destinyCity);

		if (resultFilter.length < 1) {
			Swal.fire("Error", "No hay vuelos disponibles", "error");
		}

		dispatch(
			availableSave({
				id,
				originCity,
				destinyCity,
				departureDate,
				returnDate,
				passengers,
				available: resultFilter,
				price: 1300 * passengers,
			})
		);
		dispatch(setShowTrip(true));
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="form__contain">
					<div>
						<select
							name="originCity"
							className="form__select"
							value={originCity}
							onChange={handleInputChange}
						>
							<option value="" disabled>
								Origen
							</option>
							{state.cities.map((city) => {
								return (
									<option value={city.city} key={city.id}>
										{city.city}
									</option>
								);
							})}
						</select>
					</div>
					<div>
						<select
							name="destinyCity"
							className="form__select"
							value={destinyCity}
							onChange={handleInputChange}
						>
							<option value="" disabled>
								Destino
							</option>
							{state.cities.map((city) => (
								<option value={city.city} key={city.id}>
									{city.city}
								</option>
							))}
						</select>
					</div>
					<div>
						<input
							className="form__date"
							id="salida"
							type="date"
							name="departureDate"
							value={departureDate}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<input
							className="form__date"
							id="regreso"
							type="date"
							name="returnDate"
							value={returnDate}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<input
							name="passengers"
							className="form__number"
							type="number"
							placeholder="No. de pasajeros"
							value={passengers}
							onChange={handleInputChange}
						/>
					</div>
				</div>

				<div className="form__button">
					<button
						type="submit"
						className="form__button-style pointer"
					>
						Buscar
					</button>
				</div>
			</form>
		</>
	);
};
