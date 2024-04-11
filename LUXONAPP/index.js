 const {DateTime} = require("luxon") ;
 const {func} = require("joi");


// console.log("Timestamp (in milliseconds): ", DateTime.now().ts);
//
//
// console.log("Parts:", DateTime.now().c) ;
//
// console.log("IS it Luxon?: ", DateTime.now().c)
//
//  function getAllFuncs(toCheck) {
//     const props = [] ;
//
//     let obj = toCheck ;
//
//     do{
//         props.push(...Object.getOwnProPertyNames(obj)) ;
//
//     } while(obj = Object.getPrototypeof(obj)) ;
//
//     return props.sort().filter((e,i,arr) => {
//         if(e!=arr[i+1] && typeof toCheck[e] == 'function') return true ;
//     }) ;
//  }
//
// console.log(DateTime.now())
//
//
//  const now1 = DateTime.now() ;
//
// setTimeout(()=> {
//     const now2 = DateTime.now()
//     console.log(now2.diff(now1))
// }, 1000) ;


// console.log(DateTime.now().diff(DateTime.fromISO('2010-08-10')))
//
//  console.log(DateTime.fromISO('2020-08-10').diffnow())
//
//
// console.log(DateTime.now())
//
//  console.log(DateTime.now().diff(DateTime.fromISO('2020-08-10')))


// console.log(new Date())
//
//  console.log(DateTime.fromJSDate(new Date())) ;H
//
// console.log(DateTime.fromJSDate(new Date('2028-2-14'))) ;
//
// console.log(DateTime.fromJSDate(new Date(), {zone: 'utc'})) ;


 const m = Date.now() ;

 console.log(m)
 console.log(new Date(m))
