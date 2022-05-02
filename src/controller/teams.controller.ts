import { Request, Response, Router } from "express";

import { CREATE_TEAM_ROUTE, DELETE_TEAM_ROUTE, GET_TEAMS_ROUTE, UPDATE_TEAM_ROUTE } from "../constants/general.constants";

import { TeamsService } from "../services/teams.services";

export class TeamsController 
{
    public router = Router();
    
    constructor(private teamsService: TeamsService) 
    {
        this.setRoutes();
    }

    public setRoutes() 
    {
        this.router.route(GET_TEAMS_ROUTE).get(this.getAllTeams);

        this.router.route(CREATE_TEAM_ROUTE).post(this.add);
        
        this.router.route(UPDATE_TEAM_ROUTE).put(this.update);
        
        this.router.route(DELETE_TEAM_ROUTE).delete(this.delete);

        //this.router.route("/getTeam/:id").get(this.getTeam);
    }

    private getAllTeams = async (req: Request, res: Response) => 
    {
        try 
        {
            const pokemon = await this.teamsService.getAllTeams();

            res.send(pokemon);
        } catch (error: any) 
        {            
            res.status(500).send(error.message);
        }
    };

    private add = async (req: Request, res: Response) => 
    {
        try 
        {
            const addPokemonResult = await this.teamsService.add(req.body.team);

            res.send(addPokemonResult);
        } catch (error: any) 
        {
            res.status(500).send(error.message);
        }
    };

    private delete = async (req: Request, res: Response) => 
    {
        try 
        {
            const deletePokemonResult = await this.teamsService.delete(
                req.params.id
            );

            res.send(deletePokemonResult);
        } catch (error: any) 
        {
            res.status(500).send(error.message);
        }
    };

    private update = async (req: Request, res: Response) => 
    {
        try 
        {
            const updatePokemonResult = await this.teamsService.update(
                req.params.id,
                req.body
            );
            
            res.send(updatePokemonResult);
        } catch (error: any) 
        {
            res.status(500).send(error.message);
        }
    };

    // private getTeam = async (req: Request, res: Response) => 
    // {
    //     try 
    //     {
    //         const pokemon = await this.teamsService.getTeam(
    //             req.params.id
    //         );

    //         res.send(pokemon);
    //     } catch (error: any) {
    //         res.status(500).send(error.message);
    //     }
    // };
}