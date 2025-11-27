 const url="https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn"); 
 
// Using async await

 const getFacts = async() =>{
    console.log("getting data...");
    let responce = await fetch(url);
 console.log(responce);  //responce in json format
 let data = await responce.json();
 
 factPara.innertext = data[1 ].text;
 }; 
 
// Using Promises chain
// function getFacts(){
//    fetch(url)
//    .then((Response)=>{
//       return Response.json();
//    })
//    .then((data) =>{
//       console.log(data);
//       factPara.innertext = data[1].text;
//    }) ;
// }
 
btn.addEventListener("click", getFacts);