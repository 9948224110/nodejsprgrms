function lar(arr)
      {
          var max=min=Number(arr[0]);
          for(var i=1;i<arr.length;i++)
          {
              if(arr[i]>max)
                max=Number(arr[i]);
                if(arr[i]<min)
                min=Number(arr[i]);
          }
          return "largest element:"+max+"\n  
          Smallest element is :"+min;
      }
      var numbers=process.argv.slice(2);
      console.log(lar(numbers));
      
      The Output:
      C:\Desktop>node minmax.js 3 2 1 10 9
      largest element is:10  
      Smallest element is:1
