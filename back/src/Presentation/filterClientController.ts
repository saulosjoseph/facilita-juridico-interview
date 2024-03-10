import { Request, Response } from "express";
import SingleTon from "../Infrastructure/singleTon";

const FilterClientController = async (req: Request, res: Response) => {
    res.send(await SingleTon.getInstance().filterClientUseCase.execute([{
        field: "nome",
        value: "teste2"
    }]));
}

export default FilterClientController