


// console.log('welcome to Node.js')

// // core modules ------------------------------------

// const http = require ('http')

// http.createServer((req , res) => {



// res.end('hello world')



// }).listen(5000)

// console.log('server is running at port 5000')



// const fs = require ('fs')


// fs.readFile('nodeTests' , (err,data) => {

// if(err) {

//     console.log(err);
// }
// else {

// console.log('async method :' , data.toString());

// }





// })



// const data= fs.readFileSync('nodeTests');

// console.log(data.toString())

// //-----local modules------------------------------------------------------


// const math = require('./main')


// console.log(math.plus(5,4));
// console.log(math.moins(10,8));
// console.log(math.multiply(3,9));


// //------3 rd modules --------------------------------

// const { v4: uuidv4 } = require('uuid');

// const persons =[

// {
//     id:uuidv4()      ,
//     firstname: "Jhon",
//     lastname:"doe"


// },

// {

//     id: uuidv4()        ,
//     firstname: "Jhon",
//     lastname:"Snow"

 


// }
// ]


// console.log(persons);

console.log(__filename);

console.log(__dirname);



console.log(process.argv);

console.log(process.argv[3])





