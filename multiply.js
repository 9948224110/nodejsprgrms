var mul=1;
      numbers =process.argv.slice(2);
      numbers.forEach(function (a) {
        mul =mul*Number(a);
        return mul;
         });
         console.log("the multiplication of numbers is:"+mul);
         
     o/p:
         C:\Desktop>node multiply.js 2 1 2
         the multiplication of numbers is:4
