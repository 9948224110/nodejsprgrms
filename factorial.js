var i, n,fact;
    fact=1;
   n=process.argv[2];
for(i=1; i<=n; i++)  
{
fact= fact*i;
} 
console.log("The factorial of "+n+" is:"+fact);

output:
C:\Desktop>node factorial.js 4
The factorial of 4 is:24
