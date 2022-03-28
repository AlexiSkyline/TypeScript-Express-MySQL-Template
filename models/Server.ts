import express, { Application } from 'express';
import userRoutes from '../routes/Usuario';

class Server {
    private app : Application;
    private port : string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app  = express();    
        this.port = process.env.PORT || '4000';

        // * Rutas definidas
        this.routes();
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