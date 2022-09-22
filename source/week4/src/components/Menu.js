// /components/Menu.js

import React from "react";
import Recipe from "./Recipe";
import '../stylesheets/Menu.css';

function Menu({recipes, title}) {
    return (
        <div>
                <header>
                    <h1>{title}</h1>
                </header>
                <div className="recipes">
                    { recipes.map((recipe, key) => (
                        // <h1>{recipe.name} + {key}</h1>
                        <Recipe key={key} {...recipe} />
                    ))}
                    {
                        // recipes.map((recipe) => {
                        //     <h1>{recipe.name}</h1>
                        // }
                        //     // <Recipe key={key} {...recipe} />
                        //     )
                    }
                </div>
        </div>
    )
}

export default Menu;