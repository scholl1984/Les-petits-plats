import {recipes} from '../data/recipes.js';

// display card recettes //

recipes.map((receipe) => {

    const {id, name, time, description, ingredients} = receipe  
    const receipCard = document.querySelector(".recettes_container")
    const article = document.createElement( 'article' );
    const img = document.createElement( 'img' );   
    const cardBody = document.createElement( 'div' );
    const div1 = document.createElement( 'div' );
    const div2 = document.createElement( 'div' );
    const divName = document.createElement( 'h5' );
    const divTime = document.createElement( 'p' );
    const cardUl = document.createElement( 'ul' );
    const divDescription = document.createElement( 'p' );

    receipCard.appendChild(article);
    article.appendChild(img)
    article.appendChild(cardBody)
    img.style.width = '300px'
    img.style.height = '100px' 
    cardBody.setAttribute("class", "cardBody")
    cardBody.appendChild(div1)
    cardBody.appendChild(div2)
    div1.setAttribute("class", "div1")
    div1.appendChild(divName)
    div1.appendChild(divTime)
    divName.setAttribute("class", "divName")
    divTime.setAttribute("class", "divTime")
    divName.textContent = name
    divTime.textContent = time
    div2.setAttribute("class", "div2")
    div2.appendChild(cardUl);
    div2.appendChild(divDescription);   
    cardUl.setAttribute("class", "cardUl")
    cardUl.setAttribute('id', `cardUl-${id}`);    
    cardUl.setAttribute('key', `key-${id}`);

    ingredients.map((item) => {
        
        let recipeDetails = document.createElement( 'li' );
        recipeDetails.textContent = `${item.ingredient}:${item.quantity}`;                           
        cardUl.appendChild(recipeDetails)
    }) 

    divDescription.setAttribute("class", "divDescription")
    divDescription.textContent = description
    
    filterSearchBar (receipe)  
}) 


function filterSearchBar (receipe) {

        let inputSearchBar = document.querySelector('.principal-input');
        
        inputSearchBar.addEventListener('keyup', function(ev) {
          let text = ev.target.value;
          console.log(text)
          console.log(receipe)
        })
}