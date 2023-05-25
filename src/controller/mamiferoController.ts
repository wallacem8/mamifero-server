import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class MamiferoController {
    async getAll(req: Request, res: Response): Promise<Response> {
        const result = await prismaClient.javali.findMany();

        return res.status(200).json({ result: result });
    }

    async create(req: Request, res: Response): Promise<Response> {
        await prismaClient.javali.create({
            data: {
                nome: req.body.nome,
                sexo: req.body.sexo,
                adulto: req.body.adulto
            }
        });

        return res.status(200).json("Javali criado com sucesso!");
    }

    async update(req: Request, res: Response): Promise<Response> {
        const mamifero = parseInt(req.params.mamifero);
        await prismaClient.javali.update({
            where: {
                id: mamifero
            },
            data: {
                nome: req.body.nome,
                sexo: req.body.sexo,
                adulto: req.body.adulto
            }
        })
    
        return res.status(200).json("Javali atualizado com sucesso!");
    }

    async delete(req: Request, res: Response): Promise<Response> {
        let mamifero = parseInt(req.params.mamifero);
        await prismaClient.javali.delete({
            where: {
                id: mamifero
            }
        });
    
        return res.status(200).json("Javali deletado com sucesso!");
    }
}