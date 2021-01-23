import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './home/HomePage' 
import { RecipeSearchPage } from './recipes/RecipeSearchPage' 
import { AddIngredientPage } from './ingredients/AddIngredientPage';
import { ShoppingListPage } from './shopping-list/ShoppingListPage';
const routes = [
    {
        path: '/',
        Component: HomePage,
        exact: true
    },
    {
        path: '/add-ingredient',
        Component: AddIngredientPage ,
        exact: true
    },
    {
        path: '/recipes',
        Component: RecipeSearchPage,
        exact: true
    },
    {
        path: '/shopping-list',
        Component: ShoppingListPage,
        exact: true
    }
];

export const Routes = () => (
    <Router>
        <Switch>
            { routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                >
                    <route.Component />
                </Route>
            ))
            }
        </Switch>
    </Router>
)