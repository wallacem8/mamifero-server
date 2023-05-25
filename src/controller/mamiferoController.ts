import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class MamiferoController {
    async getAll(req: Request, res: Response): Promise<Response> {
        const result = await prismaClient.javali.findMany();

        return res.status(200).json({ result: result });
    }

    async getByName(req: Request, res: Response): Promise<Response> {
        const nome = req.params.nome;
      
        const result = await prismaClient.javali.findMany({
          where: {
            nome: {
              contains: nome,
              mode: 'insensitive'
            }
          }
        });
      
        return res.status(200).json(result);
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
        const id = parseInt(req.params.id);
        await prismaClient.javali.updateMany({
            where: {
                id: id
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
        const id = parseInt(req.params.id);
        await prismaClient.javali.deleteMany({
            where: {
                id: id
            }
        });
    
        return res.status(200).json("Javali deletado com sucesso!");
    }
}