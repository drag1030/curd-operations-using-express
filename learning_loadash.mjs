import _ from 'lodash';

// console.log(_);
//
// const numbers = [1,2,3,4,5,6,,7,8,9,10] ;
//
// console.log(_.first(numbers)) ;
// console.log(_.last(numbers)) ;
// console.log(_.head(numbers)) ;
// console.log(_.nth(numbers)) ; // nt works as index u can pass index value to get data
//
// console.log(_.nth(numbers,7)) ;
//
// const chunked = _.chunk(numbers,4)
//
// console.log(chunked)
//
// const diff = _.difference(numbers,[1,,4,5])
// console.log(diff);
//
// const dropped = _.drop(numbers,5)
// console.log(dropped);
//
// const taken = _.take(numbers,4)
// console.log(taken) ;
// //
// // const filled = _.fill(Arrray(10),2)
// // console.log(filled)
//
// const num = [1,2,[2,4],[5]] ;
//
//  console.log(_.flatten(num,2))
//
// const c = [1,2,4] ; const d = [2,4,5]
// console.log(_.union(c,d))
//


const employees = [
    { id: 1, name: 'John Doe', salary: 50000, age: 30 , gender: 'M'},
    { id: 2, name: 'Jane Smith', salary: 60000, age: 35 , gender: 'M' },
    { id: 3, name: 'Michael Johnson', salary: 55000, age: 40 , gender: 'M' },
    { id: 4, name: 'Emily Brown', salary: 70000, age: 28 , gender: 'f '},
    { id: 5, name: 'Daniel Lee', salary: 65000, age: 45 ,  gender: 'M ' }
];

// console.log(employees);
//
// console.log(_.countBy(employees,'gender'))
//
// console.log(_.groupBy(employees,'gender'))
//
// const maxSalary= _.orderBy(employees,'salary', 'desc')
//
// const top3 = _.take(maxSalary,3);
//
// const top3Names = _.map(top3, ' name') ;

// const totalSalary = _.reduce(employees,(prev,curr) => prev+curr.salary,0)
//
// console.log(totalSalary)
//
// const grpByGender =_.groupBy(employees,'gender') ;
// const totalSalaryByGender = _.map(grpByGender,(grp)=>_.reduce(grp,(prev,curr)=>prev+curr.salary,0))
// console.log(totalSalaryByGender)



// _.defer(function(stamp) {
//     console.log(_.now() - stamp);
// }, _.now());

// const myArr = [1,2,0,304,5,68,7];
//
// console.log(_.fill(myArr, 'drag', 5 , myArr.length)) ;


// const objArr = [
// //     {
// //         name: 'drag',
// //         age: 22
// //     },
// //     {
// //         name: 'darek',
// //         age: 25
// //     }
// //
// // ] ;
// //


// collection


//
// const objArr = [
//     {
//         name: 'drag',
//         age: 22 ,
//         location:'bangluru'
//     },
//     {
//         name: 'dragon',
//         age: 22 ,
//         location:'bangluru'
//
//     }
//     ];
//
// console.log(_.includes(objArr, { name: 'swag'}))
//
// console.log(new Date().gettTime());
//+

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
];

_.filter(users, function(o) { return !o.active; });
// => objects for ['fred']

// The `_.matches` iteratee shorthand.
_.filter(users, { 'age': 36, 'active': true });
// => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
_.filter(users, ['active', false]);
// => objects for ['fred']

// The `_.property` iteratee shorthand.
_.filter(users, 'active');
// => objects for ['barney'
//
_.forEachRight([1, 2], function(value) {
  console.log(value);
});

var array = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 }
];

_.keyBy(array, function(o) {
    return String.fromCharCode(o.code);
});

_.keyBy(array, 'dir');