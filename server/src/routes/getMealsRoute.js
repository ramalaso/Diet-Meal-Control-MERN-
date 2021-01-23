import { getPopulatedMeals } from '../db/getPopulatedMeals.js'
import { getRecipes } from '../db/getRecipes.js'

export const getMealsRoute = {
    method: 'get',
    path: '/meals',
    handler: async (req, res)=>{
        const meals = await getPopulatedMeals()
        res.status(200).json(meals)       
    }
}
