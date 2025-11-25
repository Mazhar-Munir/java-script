 const url="https://catfact.ninja/fact";

 
 const getFacts = async() =>{
    console.log("getting data...");
    let responce = await fetch(url);
 console.log(responce);  //responce in json format
 let data = await responce.json();
 console.log(data);
 };