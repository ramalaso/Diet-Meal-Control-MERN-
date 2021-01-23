import React from 'react'
import { useMeals } from '../meals/useMeals';

export const HomePage = () => {
    const { meals, isLoading: isLoadingMeals, setMeals} = useMeals()
    console.log(meals)
    return (
            <h1>This is the home page</h1>
    )
}

