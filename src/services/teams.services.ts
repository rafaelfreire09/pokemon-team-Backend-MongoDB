import { Team } from "../models/teams.model";
import { ITeam } from "../interfaces/teams.interface";

export class TeamsService 
{
    public getAllTeams(): Promise<ITeam[]> 
    {
        return Team.find({}).exec();
    }

    public add(team: ITeam): Promise<ITeam> 
    {
        const newTeam = new Team(team);
        
        return newTeam.save();
    }

    public async delete(id: string) 
    {
        const deletedTeam = await Team.findByIdAndDelete(
            id
        ).exec();
    
        if (!deletedTeam) 
        {
            throw new Error(`Team with id '${id}' not found`);
        }
    
        return deletedTeam;
    }

    public async update(id: string, team: ITeam) 
    {
        const updatedTeam = await Team.findByIdAndUpdate(
          id,
          team
        ).exec();
    
        if (!updatedTeam) {
          throw new Error(`Team with id '${id}' not found`);
        }
    
        return updatedTeam;
    }

    // public async getTeam(id: string): Promise<ITeam> 
    // {
    //     const getTeam = await Team.findById(
    //         id
    //     ).exec();
    
    //     if (!getTeam) 
    //     {
    //         throw new Error(`Team with id '${id}' not found`);
    //     }
    
    //     return getTeam;
    // }
}