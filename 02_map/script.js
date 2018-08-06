const paintings = [
    {name:'Mona lisa',width:200,height:200},
    {name:'The scream',width:400,height:600},
    {name:'The last supper',width:600,height:700}
 ]

const appendBody=document.querySelector('body');

const messages = paintings.map(function(painting){
    return  `<div>The ${painting.name} is ${painting.width} X ${painting.height}</div>` ;
})

appendBody.insertAdjacentHTML('beforeend',messages.join("\n"));