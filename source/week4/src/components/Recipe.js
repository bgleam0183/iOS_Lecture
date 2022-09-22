// /components/Recipe.js

function Recipe(props) {
    // <section id={props.name.toLowerCase().replace(/ /g, '-')}>
    //     <h1>{props.name}</h1>
    //     <ul className="ingredients">
    //         {props.ingredients.map((ingredient, i) =>
    //             <li key={i}>{ingredient.name}</li>
    //         )}
    //     </ul>
    //     <section className="instructions">
    //         <h2>조리 절차</h2>
    //         {props.steps.map((step, i) => 
    //             <p key={i}>{step}</p>
    //         )}
    //     </section>
    // </section>
    <div>
        {props.map(item => (
            <h1>{item.name}</h1>
        ))}
    </div>
}

export default Recipe;