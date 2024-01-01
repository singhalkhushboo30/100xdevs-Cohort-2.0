// let a=10      - block- csoped local variables
// const b=20    - block-scoped local variables
// var c=30       - function-scoped or globally scoped variables


// {} -scope
// {}- in objects it is known as object declaration

// Declaration means that variable is only declared and memory is allocated but no value is set.
// However, definition means the variables has been initialized.
// The same works for variables, arrays, collections etc

//var a=300     //global scoped
// let a=300
if(true){       //   local scoped
    var a=10             
   const  b=20;
   console.log("INNER: ",a)   // 10 in case of var & let both
}
console.log(a);    // if let then a=300, var a=10
// console.log(b);
//console.log(c);

// In case of var as it is global scoped it reflects the changes in within the block and outside the block 

for(let i=0;i<Array.length;i++){
    const element=array[i];

}


