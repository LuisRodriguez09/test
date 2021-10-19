import React from 'react';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';

export const FormPayment = ({ show, close, title }) => {

	const [values, handleInputChange] = useForm({
		name: '',
		lastName: '',
		address: '',
		email: ''
	});
	const { name, lastName, address, email } = values;

	const handleSendForm = () => {
		if (!name || !lastName || !address || !email) {
			Swal.fire('Error', "Por favor rellena todos los campos", 'error');
			return;
		}
		close();
		localStorage.clear();
		Swal.fire('Success', "Gracias por tu compra!", 'success');

	};

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

								<form>
									<label for="fname">Nombre(s)</label>
									<input
										className="formPayment__input"
										type="text"
										id="fname"
										name="name"
										placeholder="Nombre(s).."
										onChange={handleInputChange}
										value={name}
									/>
									<label for="fname">Apellidos</label>
									<input
										className="formPayment__input"
										type="text"
										id="fname"
										name="lastName"
										placeholder="Apellido.."
										onChange={handleInputChange}
										value={lastName}
									/>
									<label for="fname">Dirección</label>
									<input type="text"
										className="formPayment__input"
										id="fname"
										name="address"
										placeholder="Dirección.."
										onChange={handleInputChange}
										value={address}
									/>
									<label for="fname">Correo electrónico</label>
									<input type="text"
										className="formPayment__input"
										id="fname"
										name="email"
										placeholder="Correo.."
										value={email}
										onChange={handleInputChange}
									/>
								</form>
							</main>
							<footer className="modal_footer">
								<button
									className="modal-close" onClick={() => close()}>
									Volver
								</button>
								<button className="submit" onClick={handleSendForm} >Listo!</button>
							</footer>
						</div>
					</div>
					: null
			}

		</>
	);
};
