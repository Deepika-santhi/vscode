

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
    return arr;
    // console.log(arr);
  }

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
    return count;
  }

