import { Request, Response } from 'express';
import Usuario from '../models/Usuario';

export const getUsuarios = async ( req: Request, res: Response ) => {
    const usuarios = await Usuario.findAll();
    
    res.json({ usuarios });
}

export const getUsuario = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const usuario = await Usuario.findByPk( id );

    if( !usuario ) {
        return res.status(404).json({ msg: `Usuario con id ${ id } no encontrado` });
    }

    res.json( usuario );
}

export const postUsuario = ( req: Request, res: Response ) => {
    const { body } = req;

    res.json({
        msg: 'PostUsuario',
        body
    });
}

export const putUsuario = ( req: Request, res: Response ) => {
    const { id }   = req.params;
    const { body } = req;

    res.json({
        msg: 'PutUsuario',
        body
    });
}

export const deleteUsuario = ( req: Request, res: Response ) => {
    const { id }   = req.params;

    res.json({
        msg: 'DeleteUsuario',
        id
    });
}