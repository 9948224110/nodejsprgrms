function Sort(arr){
        var len = arr.length;
        for (var i=len-1; i>=0; i--){
          for(var j = 1; j<=i; j++){
            if(Number(arr[j-1])>Number(arr[j])) {
                var t = Number(arr[j-1]);
                arr[j-1] =Number(arr[j]);
                arr[j] = t;
             }
          }
        }
        return arr;
     }
     console.log(Sort(process.argv.slice(2)));
     
     output:
     C:\Desktop>node sort.js 1 3 0 20 13
     0,1,3,13,20
     
     ------------------------------------------------------------
     
 var n=process.argv[2];
     var arr=[];
     for (i = 1; i <=n; i++)
      {
        c = 0;
        for (j = 1; j <= i; j++) 
        {
            if ((i % j)== 0)
                c++;
        }
        if (c == 2)
            arr.push(i);
      }
    console.log(" prime numbers upto "+n+" are :"+arr);
    
    output:
    C:\Desktop>node prime.js 10
    prime numbers upto 10 are :2,3,5,7
