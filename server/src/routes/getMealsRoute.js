import { getMeals } from '../db/getMeals.js'

export const getMealsRoute = {
    method: 'get',
    path: '/meals',
    handler: async (req, res)=>{
        const meals = await getMeals()
        res.status(200).json(meals)       
    }
}
