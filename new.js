

Array.prototype.negativenumber=function(number)
  {
    let arr=[];
    for(let a=0;a<number.length;a++)
      {
        if(number[a]<0)
        {
          arr.push(number[a]);
        }
      }
    console.log(arr);
    // console.log(arr);
  }
let arr=new Array();
arr2=[-9,-10,3,5,7];
arr.negativenumber(arr2);
console.log(arr2);
String.prototype.countOfvowels=function(word)
  {
    let regex=["a","e","i","o","u"];
    word=word.toLowerCase();
    let count=0;
    for(let index=0;index<word.length;index++)
      {
        if(regex.includes(word[index]))
        {
          count++;
          
        }
      }
    console.log(count);
  }
let sent=new String();
