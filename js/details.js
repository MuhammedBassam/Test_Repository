
var query = new URLSearchParams(window.location.search);
var CurrentId = query.get('ri');

var recData;

var detailImg =document.getElementById("detailImg");
var listItem =document.getElementById("listItem");
var ingredients =[];

var httpRequest =new XMLHttpRequest();
httpRequest.open("GET",`https://forkify-api.herokuapp.com/api/get?rId=${CurrentId}`);
httpRequest.send();

httpRequest.addEventListener('readystatechange',function(){
    if(httpRequest.readyState == 4 && httpRequest.status ==200){
        recData =JSON.parse(httpRequest.response).recipe;
        // console.log(recData);
        detailImg.src=recData.image_url;
        ingredients=recData.ingredients;
        displayIngredients();
    }
});

function displayIngredients(){
    var ingrList="";
    for (let i = 0; i < ingredients.length; i++) {
        ingrList+=`<li>${ingredients[i]}</li>`;
    }

    listItem.innerHTML=ingrList;
}