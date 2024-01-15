// image slides
const displayImg = document.querySelector("#displayImg")
const imageArr = [
    "./resourse/sl1.jpg",
    "./resourse/sl2.jpg",
    "./resourse/sl3.jpg",
    "./resourse/sl5.png",
    "./resourse/sl6.png",
    "./resourse/sl7.png"
]

let bag = 0;
function display(bag){
    displayImg.setAttribute("src",imageArr[bag])
}
let timer = setInterval(()=>{
    bag++
    display(bag % imageArr.length)
},2000)


function next(){
    clearInterval(timer)
   bag++
   display(bag % imageArr.length)
}
function previous(){
    clearInterval(timer)
    bag--;
    display(bag % imageArr.length)
    if(bag < 0){
        bag = imageArr.length-1;
    }
}