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

export const postUsuario = async( req: Request, res: Response ) => {
    const { body } = req;

    try {
        const existeEmail = await Usuario.findOne({ where: { email: body.email } });
        if( existeEmail ) {
            return res.status(400).json({ msg: 'El email ya existe' });
        }
        
        const usuario = new Usuario( body );
        await usuario.save();

        res.json( usuario );
    } catch (error) {
        console.log( error );
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
}

export const putUsuario = async( req: Request, res: Response ) => {
    const { id }   = req.params;
    const { body } = req;

    try {
        const usuario = await Usuario.findByPk( id );

        if( !usuario ) {
            return res.status(404).json({ msg: `Usuario con id ${ id } no encontrado` });
        }

        await usuario.update( body );
        res.json( usuario );
    } catch (error) {
        console.log( error );
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
}

export const deleteUsuario = ( req: Request, res: Response ) => {
    const { id }   = req.params;

    res.json({
        msg: 'DeleteUsuario',
        id
    });
}