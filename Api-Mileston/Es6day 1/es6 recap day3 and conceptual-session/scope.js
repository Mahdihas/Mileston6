
//1 scope




//functional scope
//local scope anythin  you write can't see outside the function
function add() {
    const toatl = 3 + 5;
    console.log('inside function', toatl);
}
// add();

//block scope can't see outside the block without var

{
    var  y = 10;
    // console.log('mahid', y);

}
// console.log('mahid', y);


