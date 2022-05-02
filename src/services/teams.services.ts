import { Team } from "../models/team.model";
import { ITeam } from "../interfaces/team.interface";

export class TeamsService 
{
    public findAll(): Promise<ITeam[]> 
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

    public async update(id: string, pokemon: ITeam) 
    {
        const updatedTeam = await Team.findByIdAndUpdate(
          id,
          pokemon
        ).exec();
    
        if (!updatedTeam) {
          throw new Error(`Team with id '${id}' not found`);
        }
    
        return updatedTeam;
    }
}