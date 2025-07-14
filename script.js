// // Events

// let btn1= document.querySelector("#btn1");
// // btn1.onclick = (e) =>{
// //     // console.log("btn1 was clicked");
// //     // let a= 25;
// //     // a++;
// //     console.log(e);
// //     console.log(e.type);
// //      console.log(e.target);
// //       console.log(e.clientx, e.clienty);
// // }

// // Event listener

// btn1.addEventListener("click",(e) =>{
//     console.log("Button was clicked-handler1");
//     });
// btn1.addEventListener("click",() =>{
//     console.log("Button was clicked-handler2");
//     });
//     const handler3=() =>{
//     console.log("Button was clicked-handler3");
//     }
// btn1.addEventListener("click",handler3);
// btn1.addEventListener("click",() =>{
//     console.log("Button was clicked-handler4");
//     });

// btn1.removeEventListener("click",handler3);   

// // btn1.addEventListener("dblclick",() =>{
// //     console.log("Button was clicked- handler 2");
// // } )
// // let div1= document.querySelector("#div1");

// // Question toggle button

let modebtn =document.querySelector("#mode");
let currMode="light";
let body=document.querySelector("body");
modebtn.addEventListener("click", () =>{
    if(currMode==="light"){
        currMode="dark";
       body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode="light";
       body.classList.add("light");
        body.classList.remove("dark");
      }
    console.log(currMode);
});