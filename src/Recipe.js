import React from 'react';

const Recipe = ({title,calories,image, ingredients }) => {
    return(
    <div>
<h1>Title:{title}</h1>
<ol>
    {ingredients.map(ingredient =>(
        <li>{ingredient.text}</li>    
    ))}
</ol>
    <p>Calories:{Math.round(calories,1)}</p>
            <img src={image} alt=""/>

    </div>
    );

};

export default Recipe;