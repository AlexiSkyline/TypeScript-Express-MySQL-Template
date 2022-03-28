import dotenv from 'dotenv';
import Server from './models/Server';

// * Configutación de DOTENV
dotenv.config();

const server = new Server();

server.listen();