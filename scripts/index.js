import {recipes} from '../data/recipes.js';



recipes.map((receipe) => {

    const {id, name, time, description, ingredients, appliance, ustensils} = receipe  

    // display card recettes //

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
    divDescription.setAttribute("class", "divDescription")
    divDescription.textContent = description

    ingredients.map((item) => {
        
    // display card recettes // (suite)

        let recipeDetails = document.createElement( 'li' );
        recipeDetails.textContent = `${item.ingredient}:${item.quantity}`;                           
        cardUl.appendChild(recipeDetails)

    // display ingredients options //

     const ingredientsList = document.querySelector(".search-list")
     const li = document.createElement('li')
     li.setAttribute("class", "hidden")
     li.setAttribute("value", `${item.ingredient}`)
     li.textContent = item.ingredient
     ingredientsList.appendChild(li)
    
    }) 

    // display appareils options //
    
    const appareilsList = document.querySelector(".search-list-appareils")
    const liappareils = document.createElement('li')
    liappareils.setAttribute("class", "hidden")
    liappareils.setAttribute("value", `${appliance}`)
    liappareils.textContent = appliance
    appareilsList.appendChild(liappareils)


    // display ustensiles options //

    const ustensilesList = document.querySelector(".search-list-ustensiles")
    const liustensiles= document.createElement('li')
    liustensiles.setAttribute("class", "hidden")
    liustensiles.setAttribute("value", `${ustensils}`)
    liustensiles.textContent = ustensils
    ustensilesList.appendChild(liustensiles)

    // function played //

     filterSearchBar (receipe, description, name, ingredients)  
     filterIngredients (ingredients)
    
}) 

function filterSearchBar (receipe, description, name, ingredients) {
   
    let inputSearchBar = document.querySelector('.principal-input');
        
        inputSearchBar.addEventListener('keyup', function(ev) {

                var text = ev.target.value;
                var pat = new RegExp(text, 'i');
                var items = document.getElementsByTagName("article")

                for (var i = 0; i < items.length; i++) {

                                var item = items[i]

                                if (!pat.test(item.innerText)) {
                                    item.style.display = "none"
                                } else {         
                                   item.style.display = ""                               
                                }
                                
                                          
                } 
            
        })  

        filterIngredients ()                
}




function filterIngredients (ingredients) {

   var inputIngredients =  document.querySelector('.input_ingredients');
   var items = document.querySelector('.search-list').getElementsByTagName('li');
   
    inputIngredients.addEventListener('keyup', function(ev) {

        var textIngredients = ev.target.value;
        var patIngredients = new RegExp(textIngredients, 'i');
    

        for (var i=0; i < items.length; i++) {
            var item = items[i];
        
            if (patIngredients.test(item.innerText)) {
            item.classList.remove("hidden");
            }
            else {
            item.classList.add("hidden");
            }
        }

    });
    
}
