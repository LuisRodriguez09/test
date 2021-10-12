import React from 'react';

export const Bookings = ({ show, close, title }) => {
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
							<main className="modal_content">asdasd </main>
							<footer className="modal_footer">
								<button className="modal-close" onClick={() => close()}>
									Cancel
								</button>

								<button className="submit">Submit</button>
							</footer>
						</div>
					</div>
					: null
			}
		</>
	);
};
