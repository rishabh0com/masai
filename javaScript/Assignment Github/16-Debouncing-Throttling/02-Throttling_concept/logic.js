let display = document.querySelector("#root")
let input = document.querySelector("#input")

async function fetchData(query){
    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        let data = await response.json();
        console.log(data)
        let meals = data.meals
        display.innerHTML = ""
        meals.forEach(ele => {
            display.innerHTML += `
            <div>
            <div class="imageBox">
                <img src="${ele.strMealThumb}" class="image" alt="">
            </div>
            <p class="name">${ele.strMeal}</p>
        </div>
`
        });
    } catch (error) {
        
    }
}


input.addEventListener("input",()=>{
    Search(input.value)
})


function throtlling (func,delay){

    return (query)=>{
        setTimeout(() => {
           func(query)
        }, delay);
    

    }
}

 const Search = throtlling(fetchData,500)