import { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import { MONGO_URL, PRE_URL } from "./constants/general.constants";

import { TeamsService } from "./services/teams.services";
import { TeamsController } from "./controller/teams.controller";

class App 
{
    public app: Application;

    constructor() 
    {
        this.app = express();
        this.setConfig();
        this.setMongoConfig();
        this.setControllers();
    }

    private setConfig() 
    {
        this.app.use(bodyParser.json({ limit: "50mb" }));
        this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
        this.app.use(cors());
    }

    private setMongoConfig() 
    {
        mongoose.Promise = global.Promise;
        
        mongoose.connect(MONGO_URL);
    }

    private setControllers() 
    {
        const pokemonController = new TeamsController(new TeamsService());
    
        this.app.use(PRE_URL, pokemonController.router);
    }
}

export default new App().app;