import React from 'react';
import { Bookings } from '../modal/Bookings';

export const Form = () => {

	return (

		<>

			<form >

				<div className="form__contain">

					<select name="select" className="form__select">
						<option value="value1">Value 1</option>
						<option value="value2">Value 2</option>
						<option value="value3">Value 3</option>
					</select>

					<select name="select" className="form__select">
						<option value="value1">Value 1</option>
						<option value="value2">Value 2</option>
						<option value="value3">Value 3</option>
					</select>

					<label for="start"></label>

					<input className="form__date" id="date" type="date" />

					<label for="start"></label>

					<input className="form__date" id="date" type="date" />

					<input className="form__number" type="number" placeholder="No. de pasajeros" />

				</div>

				<div className="form__button">
					<button
						className="form__button-style pointer"
					>Buscar</button>
				</div>

			</form>

		</>
	);
};
