//  const employ = {
//   calcuTax(){
//     console.log("tax rate is 10%");
//   }, 
//  };
//  const ahsan= {
//     salary : 50000,
//  };
//  ahsan.__proto__ = employ;

// class

// class toytaCar {
    
//     constructor(brand,mileage){
//         console.log("creating a new object");
//         this.brand = brand;
//         this.mileage = mileage;
//      }
//     start(){
//         console.log("start");

//      }
//     stop(){
//           console.log("stop");

//      }
// }
//   let fortuner = new toytaCar("fortuner",12);
//   console.log(fortuner);
//   let landcruser = new toytaCar("landcruser",9);
//     console.log(landcruser);

// class inheritance

// class person{
//     constructor(name){
//         this.species = "homo grnious";
//         this.name = name;
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }
// class engineer extends person{
//     constructor(name) {
//         super(name);
//         console.log("mazhar perfome our work.")
//     }
//     work(){
//         console.log("Engineer work for problims solve");
//     }
// }
// let mazhar = new engineer("Mazhar");

// Practic Question

// let data = "secret information";
// class user{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log("data =", data);
//     }
// }
// class admin extends user {
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         data = "some new data";
//     }
// }
// let student1= new user("Mazhar","abc@gmail.com");
// let student2= new user("azhar","xyz@gmail.com");

// let admin1 = new admin("admin1","admin@colloge.com");

// Error Heandling

// let a =3;
// let b = 5;
// console.log("a =",a);
// console.log("b = ",b);
// console.log("a+b =",a+b);
// try{
// console.log("a+b =",a+c);
// }catch(err){
//     console.log(err);
// }

// console.log("a+b =",a+b);
// console.log("a+b =",a+b);
// console.log("a+b =",a+b);