import { Request, Response } from "express";
import SingleTon from "../Infrastructure/singleTon";
import { Client } from "../Application/client/entities/Client";

const CreateClientController = async (req: Request, res: Response) => {
    try {
        const client: Client = req.body;
        res.send(await SingleTon.getInstance().createClientUseCase.execute(client));
    } catch (error: any) {
        res.status(500).send({
            message: error.message
        });
    }
}
export default CreateClientController