import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [coordinates, setCoordinates] = useState(null);

	const getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				position => {
					const { latitude, longitude } = position.coords;
					setCoordinates({ latitude, longitude });
				},
				error => {
					console.log(error);
				}
			);
		} else {
			console.log("Geolocation is not supported by this browser.");
		}
	};

	useEffect(() => {
		getLocation();
	}, []);

	return (
		<div>
			<div className="container">
				<br />
				<div className="row justify-content-center">
					<div className="col-md-6">
						<form>
							<div className="mb-3">
								<label htmlFor="specimenName" className="form-label bg-success">Specimen Name</label>
								<input type="text" className="form-control" id="specimenName" placeholder="Enter specimen name" />
							</div>
							<div className="mb-3">
								<label htmlFor="ubication" className="form-label bg-success">Ubication</label>
								<input
									type="text"
									className="form-control"
									id="ubication"
									placeholder="Enter ubication"
									value={coordinates ? `${coordinates.latitude}, ${coordinates.longitude}` : ""}
									readOnly
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="ubicationImage" className="form-label bg-success">Ubication Image</label>
								<input type="file" className="form-control" id="ubicationImage" accept="image/*;capture=camera" />
							</div>
							<div className="mb-3">
								<label htmlFor="imageSpecimen" className="form-label bg-success">Image of Specimen</label>
								<input type="file" className="form-control" id="imageSpecimen" accept="image/*;capture=camera" />
							</div>
							<div className="mb-3">
								<label htmlFor="qualitySpecimen" className="form-label bg-success">Quality of Specimen</label>
								<select className="form-control" id="qualitySpecimen">
									<option value="high">High</option>
									<option value="medium">Medium</option>
									<option value="low">Low</option>
								</select>
							</div>
							<div className="mb-3">
								<label htmlFor="additionalComments" className="form-label bg-success">Additional Comments</label>
								<textarea className="form-control" id="additionalComments" rows="3" placeholder="Enter additional comments"></textarea>
							</div>
							<button type="submit" className="btn btn-primary">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
