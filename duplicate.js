var arr =process.argv.slice(2);
  var empty = [], dupli = [];
for(var i = 0; i < arr.length; i++)
{
  if(empty.includes(arr[i]) && !dupli.includes(arr[i]))
    dupli.push(arr[i])
  else
    empty.push(arr[i]);
}
console.log("The duplicate elements are:"+dupli);

   o/p:
   C:\Desktop>node index.js 2 1 1 1 2 3 6 6 6 7
   The duplicate elements are:2,1,6
