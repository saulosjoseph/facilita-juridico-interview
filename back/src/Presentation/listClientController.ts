import { Request, Response } from "express";
import SingleTon from "../Infrastructure/singleTon";

const ListClientController = async (req: Request, res: Response) => {
    res.send(await SingleTon.getInstance().listClientUseCase.execute());
}
export default ListClientController