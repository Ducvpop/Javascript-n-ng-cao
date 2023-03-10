const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23 , Firenze, Italy",
    categorries: ['Italian', 'Pizzeria', 'Vegetarian', 'Organnic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
         thu:{
          open :12,
          close:22,
         },
         fri:{
          open :11,
          close:23,
         },
         sat:{
          open :0,  //mo 24h
          close:24,
         },
    },
    order:function(starterIndex, mainIndex){
        return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery :function({starterIndex = 1,mainIndex = 0,time = '20:00',address}){
      console.log(`Order received !${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
};
restaurant.orderDelivery({
  time : '22:30',
  address :'Via del Sole, 21',
  mainIndex:2,
  starterIndex:2,
});
restaurant.orderDelivery({
  address :'Via del Sole, 21',
  starterIndex:1,
});
  const {name, openingHours, categorries} = restaurant;
  console.log(name,openingHours,categorries);

  const {name: restaurantName, openingHours:hours,categorries:tags} = restaurant;
  console.log(restaurantName,hours,tags);
   const{menu = [], starterMenu:starters = []} = restaurant;
   console.log(menu,starters);

   let a = 111;
   let b = 999;
  const obj = {a:23, b: 7, c:14};
  ( {a,b} = obj );
  console.log(a,b);

const{fri: {open :o,close:c}} = openingHours;
console.log(o,c);



// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr
// console.log(x, y, z);
// console.log(arr);

// // const [first ,  , second] = restaurant.categorries;
// // console.log(first,second);


// let [main, , secondary] = restaurant.categorries;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main , secondary] = [secondary,main];
// console.log(main, secondary);

//   const [starter, mainCourse] = restaurant.order(2,0) 
//   console.log(starter,mainCourse);

//   const nested = [2, 4, [ 5, 6]];
// //    const [i, ,j] = nested;
// //   console.log(i, j );
//   const [i , , [j , k]] = nested;
//   console.log(i, j ,k);
  


//   const [p = 1 , q = 1, r = 1] = [8,9];
//   console.log(p,q, r);