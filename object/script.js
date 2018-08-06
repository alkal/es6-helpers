
const showItems=(arg1,...arg2)=>{

    let arr=[...arg1,...arg2];

    return arr;
 }
 console.log(showItems(["dogs","cats"],"turtles","sharks")) 