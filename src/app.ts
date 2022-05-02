import { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import { MONGO_URL } from "./constants/pokeApi.constants";

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
        // Allows us to receive requests with data in json format
        this.app.use(bodyParser.json({ limit: "50mb" }));
        // Allows us to receive requests with data in x-www-form-urlencoded format
        this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
        // Enables cors
        this.app.use(cors());
    }

    private setMongoConfig() 
    {
        mongoose.Promise = global.Promise;
        
        mongoose.connect(MONGO_URL);
    }

    private setControllers() 
    {
        // Creating a new instance of our Pokemon Controller
        const pokemonController = new TeamsController(new TeamsService());
    
        // Telling express to use our Controller's routes
        this.app.use("/api", pokemonController.router);
    }
}

export default new App().app;