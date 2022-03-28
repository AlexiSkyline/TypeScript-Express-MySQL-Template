import express, { Application } from 'express';
import userRoutes from '../routes/Usuario';
import cors from 'cors';

class Server {
    private app : Application;
    private port : string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app  = express();    
        this.port = process.env.PORT || '4000';

        // * Metodos Iniciales
        this.middlewares();
        this.routes();
    }

    middlewares() {
        // ? CORS
        this.app.use( cors() );

        // ? Lectua del body
        this.app.use( express.json() );

        // ? Carpeta publica
        this.app.use( express.static( 'public' ) );
    }

    routes() {
        this.app.use( this.apiPaths.usuarios, userRoutes );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log( 'Server Corriendo en el puerto: ' + this.port );
        });
    }
}

export default Server;