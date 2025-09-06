// How Promises are working

// function asyncFunc1 () {
//     return new Promise ((resolve, reject) =>{
//         setTimeout(()=>{
//         console.log("data1");
//         resolve("success");
//         }, 5000);
//     });
// }
// function asyncFunc2 () {
//     return new Promise ((resolve, reject) =>{
//         setTimeout(()=>{
//         console.log("data2");
//         resolve("success");
//         }, 5000);
//     });
// }
// console.log("fetching data1....");
// let p1 = asyncFunc1();
// p1.then((res) =>{
//     console.log(res);
//     console.log("fetching data2....");
// let p2 = asyncFunc2();
// p2.then((res) =>{
//     console.log(res);
// });
// });


 function getData(dataid, getNewData) {
  return new Promise ((resolve, reject) =>{
     setTimeout(() =>{ 
    console.log("data" ,dataid);
    resolve("success");
   if(getNewData){
    getNewData();
   }
    },2000);
     });
 }

//  Promise chain

getData(1).then((res) => {
   return getData(2);
})
.then((res) =>{
    return getData(3);
})
.then((res) =>{
    console.log(res);
});

// //  Callack Hell

//  getData(1, () =>{
//     console.log("getting data2...");
//    getData(2, () =>{
//     console.log("getting data3...");
//     getData(3, () =>{
//      console.log("getting data4...");
//      getData(4);
//         });
//     });
//  }); 

//Promises

// let promise = new Promise ((resolve, reject) =>{
//    console.log("I am a promis:");
//    reject("some error occurred")
// });
