var summation=0;  
  numbers =process.argv.slice(2);
  numbers.forEach(function (a) {
     summation +=Number(a);
     return summation;
      });
      console.log('addition is:'+summation);



 output :
      ------------------------------------
      C:\Desktop>node add.js 2 6
      addition is:8
