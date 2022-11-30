var arr = [12,13,14,15,17,19,21]
var result =[];
var odd = function(arr){
     for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
           result.push(arr[i]);
        }
    }
    return result;
}
console.log(odd(arr));  

  
  