function fibonacci(num) {
    var arr = [0,1];
    for (var i = 2; i <= num; i++) {
      arr.push(arr[i-1] + arr[i-2]);
    }
    return arr;
  }
  var a=process.argv[2]-1;
 console.log(fibonacci(a));
 
output:
C:\Desktop>node fib.js 4
[ 0, 1, 1, 2, 3 ]
