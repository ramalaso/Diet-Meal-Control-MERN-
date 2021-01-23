import { db } from './db'

export const getRecipes = async () => {
    const connection = db.connection
    const recipes = await connection.collection('recipes').find({}).toArray()

    return recipes
}