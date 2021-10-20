import React from "react";
import { useSelector } from "react-redux";
import { AvailableTrips } from "./AvailableTrips";

export const Available = () => {
	const available = useSelector((state) => state.available);
	const obj = available.availableCities.available;
	const show = useSelector((state) => state.show);

	return (
		<>
			{show.show ? (
				<div style={{ backgroundColor: "#f0e5e5" }}>
					<h1 className="available__title">Vuelos disponibles</h1>
					<div>
						<div className="available__contain">
							{obj?.available.map((city, index) => (
								<AvailableTrips
									key={index}
									city1={obj.originCity}
									city2={obj.available[index]}
									departureDate={obj.departureDate}
									returnDate={obj.returnDate}
									passengers={obj.passengers}
									price={obj.price}
								/>
							))}
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};
