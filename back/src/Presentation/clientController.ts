import express, { Request, Response } from "express";
import SingleTon from "../Application/singleTon";
import { Client } from "../Domain/entities/Client";

export default class ClientController {
    static start(app: express.Express) {
        app.get("/filter", async (req: Request, res: Response) => {
            res.send(await SingleTon.getInstance().filterClientUseCase.execute([{
                field: "nome",
                value: "teste2"
            }]));
        });
        app.get("/list", async (req: Request, res: Response) => {
            res.send(await SingleTon.getInstance().listClientUseCase.execute());
        });
        app.post("/create", async (req: Request, res: Response) => {
            try {
                const client: Client = req.body;
                res.send(await SingleTon.getInstance().createClientUseCase.execute(client));
            } catch (error: any) {
                res.status(500).send({
                    message: error.message
                });
            }
        });
    }
}