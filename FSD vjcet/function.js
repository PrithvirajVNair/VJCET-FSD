function names(){
    console.log("Hello");
};
names()


function add(a,b){
    console.log(a+b);
};
add(5,2)

function mul(a,b){
    console.log(a*b);
};
mul(5,2)

//Arrow Function || ES6
const add1=(a,b)=>{
    console.log(a+b);
}
add1(1,2);


let x=20;
let y=10;
if(x>y)
{
    console.log(true);
}
else
{
    console.log(false);
}