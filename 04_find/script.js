const cars = [
    {brand:'Ford',price:500,available:2,type:'Sport car'},
    {brand:'Nissan',price:200,available:5,type:'Wagon'},
    {brand:'Chevy',price:300,available:4,type:'Sport car'},
    {brand:'Porsche',price:100,available:1,type:'Urban'},
 ];


function getResults(price,type){
    return cars.find(function(car){
        return car.type===type 
            && car.price<price
            && car.available>0
    });

}


 document.querySelector(".search").addEventListener("click",function(){
    let price=document.querySelector("#price").value;
    let type=document.querySelector("#type").value;

    

    let results=getResults(price,type);

    

    if(results){
        document.querySelector(".search").insertAdjacentHTML('beforeend',`<div>Found ${results.brand} for ${results.price}</div>`);
    }
    else{
        document.querySelector(".search").insertAdjacentHTML('beforeend','<div>No car for you.</div>');
    }


});
 