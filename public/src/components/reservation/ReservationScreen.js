import React from 'react';
import { Form } from './Form';
import { Available } from './Available';
import { useSelector } from 'react-redux';

export const ReservationScreen = () => {

	const show = useSelector(state => state.show);

	return (
		<>
			<div className="reservation_main-content">

				<div className="reservation_box-content">
					<h2 className="reservation_title">Reserva tus boletos</h2>

					<Form />

				</div>

			</div>

			{
				show.show ? <Available /> : null
			}


		</>



	);
};
