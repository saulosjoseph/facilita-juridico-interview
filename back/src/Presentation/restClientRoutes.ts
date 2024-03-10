import express from "express";
import FilterClientController from "./filterClientController";
import ListClientController from "./listClientController";
import CreateClientController from "./createClientController";

export default class RestClientRoutes {
    static start(app: express.Express) {
        app.get("/filter", FilterClientController);
        app.get("/list", ListClientController);
        app.post("/create", CreateClientController);
    }
}