import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import { Navbar } from '../components/navbar/Navbar';
import { ReservationScreen } from '../components/reservation/ReservationScreen';

export const AppRouter = () => {
	return (
		<Router>

			<>

				<Navbar />

				<div>
					<Switch>
						<Route path="/" component={ReservationScreen} />
					</Switch>
				</div>

			</>
		</Router>
	);
};
