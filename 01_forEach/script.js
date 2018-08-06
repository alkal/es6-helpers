const htmlElement=document.querySelector('.players');
const displayProducts=document.querySelector('body');

const players = [
    {jersey:56,name:"Djounte Murray",position:"Point guard",PPG:2.6},
    {jersey:98,name:"Dennis Rodman",position:"Small Forward",PPG:10.8},
    {jersey:1,name:"Michael Jordan",position:"Small Forward",PPG:345.6},
    {jersey:2,name:"Lebron James",position:"Shooting Guard",PPG:26.7},
    {jersey:33,name:"Patrick Ewing",position:"Center",PPG:20.2}
 ]

const products = [
    {name:'Iphone',price:200},
    {name:'Motorola',price:70},
    {name:'Samsung',price:150},
    {name:'Sony',price:98},
    {name:'Windows pone',price:10}
 ];

players.forEach(function(player,i){
    let template=null;
    
        template= `
            <li key=${i}>${player.jersey} - ${player.name} -- Position: ${player.position} -- RPP: ${player.PPG}</li>
        `;
    
        htmlElement.insertAdjacentHTML('beforeend',template);
});

products.forEach(function(product){
    let template=null;

    function discount(){
        if(product.price<100){
            return `<span>On sale !!</span>`
        }
        else
            return '';
    }

    template=`
        <div class="product">
            <h1>${product.name}</h1>
            <strong>Price: $ ${product.price} </strong>
            ${discount()}
        </div>
    `;

    displayProducts.insertAdjacentHTML('beforeend',template);
})