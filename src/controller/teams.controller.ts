import { Request, Response, Router } from "express";

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
        this.router.route("/createTeam").post(this.add);

        this.router.route("/getAllTeams").get(this.findAll);

        this.router.route("/updateTeam/:id").put(this.update);

        this.router.route("/deleteTeam/:id").delete(this.delete);
    }

    private findAll = async (req: Request, res: Response) => 
    {
        try 
        {
            const pokemon = await this.teamsService.findAll();

            res.send(pokemon);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    };

    private add = async (req: Request, res: Response) => 
    {
        try 
        {
            const addPokemonResult = await this.teamsService.add(req.body);

            res.send(addPokemonResult);
        } catch (error: any) {
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
        } catch (error: any) {
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
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    };
}