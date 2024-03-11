import express from "express";
import ListClientController from "../Core/controllers/listClientController";
import SingleTon from "./singleTon";
import { Errors } from "../Core/errors";

export default class RestClientRoutes {
    public start(app: express.Express) {
        app.get("/filter", async (req, res) => {
            try {
                res.send(await SingleTon.getInstance().filterClientController.handle(req.query))
            } catch (error: any) {
                if (error.message === Errors.create_400) {
                    res.status(400).send(error.message)
                }
                res.status(500).send(error.message)
            }
        });
        app.get("/list", ListClientController);
        app.post("/create", async (req, res) => {
            try {
                res.send(await SingleTon.getInstance().createClientController.handle(req.body))
            } catch (error: any) {
                if (error.message === Errors.create_400) {
                    res.status(400).send(error.message)
                }
                res.status(500).send(error.message)
            }
        });
    }
}