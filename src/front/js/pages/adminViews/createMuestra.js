import React from "react";
import { Cards } from "../../component/cards";



export const CreateMuestra = () => {

	const data = [

		{
			img: "",
			title: "Agregar tarea por usuario",
			text: "Agrega una tarea a un usuario",
			buttonText: "Agregar",
			url: "/dashboard/createproject"
		},
		{
			img: "",
			title: "Eliminar muestras de usuarios",
			text: "Elimina las tareas a los usuarios",
			buttonText: "Eliminar",
			url: "/dashboard/assigntask"
		},

	]

	return (


		<div className="" style={{ backgroundImage: "url('https://res.cloudinary.com/dz6bglmyq/image/upload/v1688081143/banner4_crx1pg.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>

			<div  >
				<div className="row p-4 d-flex justify-content-center text-center">
					{
						data.map(({ img, title, text, buttonText, url }, i) => {
							return (
								<Cards
									key={i}
									src={img}
									title={title}
									text={text}
									url={url}

									buttonText={buttonText}
								/>
							)
						})}
				</div>

			</div>

		</div>


	)
}