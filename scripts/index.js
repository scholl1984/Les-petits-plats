import {recipes} from '../data/recipes.js';



recipes.map((receipe, index) => {
    const {id, name, time, description, ingredients} = receipe      
    let receipCard = document.querySelector(".recettes_container")
    const card = document.createElement( 'article' );
    const img = document.createElement( 'img' );
    console.log({receipe})    
    img.style.width = '300px'
    img.style.height = '100px'
    const cardBody = document.createElement( 'ul' );
    cardBody.setAttribute('id', `cardbody-${id}`);
    cardBody.setAttribute('key', `key-${id}`);
    card.textContent = id;
    card.appendChild(img)
    receipCard.appendChild(card);
    
    ingredients.map((item, i) => {
        console.log(`${item.ingredient}:${item.quantity}` )
        let recipeDetails = document.createElement( 'li' );
        recipeDetails.textContent = `${item.ingredient}:${item.quantity}`;                           
        cardBody.appendChild(recipeDetails)
    }) 
    card.appendChild(cardBody)
        
        // if (id) {
            // receipCard.innerHTML = id
            
            
            
        }) 

