// console.log("i")

// comsole("eat");

// console.log("ice cream ");

// console.log("i")

// setTimeout(() => {
//     console.log("eat")
// },4000)
//  console.log("ice cream ");

 let stocks = {
    fruits: ["apple", "banana", "orange"],
    liquid:["milk", "ice","water"],
    holder:["fruit holder", "ice holder"],
    toppings:["vanilla", "chocolate"]
 };



 let production = () => {
 setTimeout(()=>{
    console.log("production has started")
    setTimeout(()=>{
      console.log("The fruit has been chopped")
      setTimeout(()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
        setTimeout(()=>{
          console.log("start the machine")
          setTimeout(()=>{
            console.log(`Ice cream placed on ${stocks.holder[1]}`)
            setTimeout(()=>{
              console.log(`${stocks.toppings[0]} as toppings`)
              setTimeout(()=>{
                console.log("serve Ice cream")
              },2000)
            },3000)
          },2000)
        },1000)
      },1000)
    },2000)
  },1000)
 }