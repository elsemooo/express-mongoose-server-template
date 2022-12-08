const express = require("express");
const cors = require("cors");

const { dbConnection } = require("../database/config");

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;

		this.paths = {
			// ej: 
			// route: "/api/route",
		};

		// Conectar a base de datos
		this.conectarDB();

		// Middlewares
		this.middlewares();

		// Rutas de mi aplicación
		this.routes();
	}

	async conectarDB() {
		dbConnection();
	}

	middlewares() {
		// CORS
		this.app.use(cors());

		// Lectura y parseo del body
		// this.app.use(express.json());
	}

	routes() {
		// ej:
		// this.app.use(
		// 	this.paths.route,
		// 	require("../apiServices/service/route"),
		// )
		this.app.get("/", (req, res) => {
			res.json("hola mundo");
		});
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log("Servidor corriendo en puerto", this.port);
		});
	}
}

module.exports = Server;
