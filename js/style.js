// session 12

var httpRequest = new XMLHttpRequest();
httpRequest.open("GET","https://forkify-api.herokuapp.com/api/search?q=pasta");
httpRequest.send();

var postRow = document.getElementById("postRow");

var receiveData =[];

httpRequest.addEventListener('readystatechange',function(){
    if(httpRequest.readyState == 4 && httpRequest.status==200){
        receiveData=JSON.parse(httpRequest.response).recipes;
        displayData();
    }
});


function displayData(){
    var contant=``;
    for (let i = 0; i < receiveData.length; i++) {
        contant+=`
        <div class='col-md-4'>
            <div class="receipe">
                <img src="${receiveData[i].image_url}" class='img-fluid'>
                <h2>${receiveData[i].title}}</h2>
                <p>${receiveData[i].publisher}}</p>
                <a href="${receiveData[i].source_url}" class="btn btn-danger my-2">Source</a>
                <a href="details.html?ri=${receiveData[i].recipe_id}" class="btn btn-info my-2">Details</a>
            </div>
        </div>`
    }
    postRow.innerHTML=contant;

}