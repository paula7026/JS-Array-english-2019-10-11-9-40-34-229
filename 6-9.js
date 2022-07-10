// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
// a不是，b是
console.log(a instanceof Array);
console.log(b instanceof Array);

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
a.forEach((item, index) => {     
    a[index]=item*2 
})
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var i;
var a=colors.join(" ");
var b=colors.join("+");
var c=colors.join(",");
switch (i){
    case 1:console.log(a);break;  
    case 2:console.log(b);break;  
    case 3:console.log(c);break;
} 


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort((a, b) => {
    return b-a 
  })
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var k= a.join(""); 
var b={}; 
for(var i=0;i< k.length;i++){
        var c= k.charAt(i);
         if(b[c]){
                   b[c]++; 
          }else{
                   b[c]=1;
           } 
} 
var max=0; 
for(var d in b) {
             if(max<b[d]){
               max=b[d]; 
              }
 } for(var e in b){
         if(max==b[e]){
                   console.log(e);
         }
 }