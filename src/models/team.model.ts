import { ITeam } from "../interfaces/team.interface";
import { model, Schema } from "mongoose";

const TeamSchema = new Schema<ITeam>(
{
    name: { type: String, required: [true, "Field is required"] },
    pokemons: [
        {
            image: { type: String, required: [true, "Field is required"] },
            type1: { type: String, required: [true, "Field is required"] },
            type2: { type: String, required: [false, "Field is required"] },
        },
        {
            image: { type: String, required: [true, "Field is required"] },
            type1: { type: String, required: [true, "Field is required"] },
            type2: { type: String, required: [false, "Field is required"] },
        },
        {
            image: { type: String, required: [true, "Field is required"] },
            type1: { type: String, required: [true, "Field is required"] },
            type2: { type: String, required: [false, "Field is required"] },
        },
        {
            image: { type: String, required: [true, "Field is required"] },
            type1: { type: String, required: [true, "Field is required"] },
            type2: { type: String, required: [false, "Field is required"] },
        },
        {
            image: { type: String, required: [true, "Field is required"] },
            type1: { type: String, required: [true, "Field is required"] },
            type2: { type: String, required: [false, "Field is required"] },
        },
        {
            image: { type: String, required: [true, "Field is required"] },
            type1: { type: String, required: [true, "Field is required"] },
            type2: { type: String, required: [false, "Field is required"] },
        },
    ]
});

export const Team = model<ITeam>("PokemonTeams", TeamSchema);