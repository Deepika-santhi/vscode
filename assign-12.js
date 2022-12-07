let answer=[];
function captilise(cap)
  {
    let letter=cap
    console.log(letter);
    

    for(let x=0;x<letter.length;x++)
    {
          if(letter[x]==" ")
          {
            answer.push(" ")
            x++;
        answer.push(letter[x].toUpperCase());
          }
          else
          {
            answer.push(letter[x])
          }
    }
  console.log(answer.join(""));
  }


captilise("I am a string");

let reverse=[];
function sorting(value)
{
  let given=value.split("");
  given=(given.sort());

  for(let rev=given.length-1;rev>=0;rev--)
  {
    
    reverse.push(given[rev]);
  }
  console.log(reverse.join(""));
  console.log(given.join(""));
}
sorting("Ashok");

var arry="abcdefghijklmnopqrstuvwxyz";
let counting =0;
let next=[];
// let ex=[];
arry=arry.split("")
console.log(arry);

function pangram(sentence)
{
  let check=sentence.toLowerCase();
  check=check.split("");
  console.log(check);

  for(let checker=0;checker<check.length;checker++)
  {
    let checking=check[checker];
     if(arry.includes(checking))
      {
       console.log(checker);
      // console.log(checking);
      if(!next.includes(checking))
      {
        counting++;
        console.log(counting);
        // ex.push(checking);

      }
     
      next.push(checking);
      }
 
  
}

 console.log(counting);
  console.log(next.join(""));
  // console.log(ex.join(""));
}

pangram("The quick brown fox jumps over the lazy dog")

function vowel(val,ind)
{
  let word=val;
  let place=ind;let ex=[];
  let vowel=["a","e","i","o","u"]
  word=word.toLowerCase();
  if(place<word.length)
  {
  if(vowel.includes(word[place]))
  {
    console.log("It is vowel");

  }
  else
  {
    console.log("It is consonant");
  }
}
else
{
  console.log("Invalid input")
}
}
vowel("Hello",4)

function repeatingChar(chara,num)
{
  let duplicate=[];
  let dup=[];
  let dupnum=0;
  let charact=chara.toLowerCase();
  charact=charact.split("");
  for (let repeating = 0; repeating < charact.length; repeating++) 
  {
    if(!duplicate.includes(charact[repeating]))
    {
      duplicate.push(charact[repeating])
    }
    else{
      dup.push(charact[repeating])
    }
  }
  dup=dup.sort();
console.log(duplicate,dup);


for(let cha=0;cha<dup.length;cha++)
{
  for(let cha1=0;cha1<dup.length;cha1++)
  {
    if(dup[cha]==dup[cha1])
    {
      dupnum++;
    }
  }
  if(dupnum+1==num)
  {
    console.log(dup[cha],dupnum+1);
  }
  dupnum=0;
}

}
repeatingChar("abcdddeafe",3)

function common(stringval)
{
  let common=[];
  let com=[];
  let comnum=0;
  let comnum1=0;
  let strval=stringval.toLowerCase();
  strval=strval.split("");
  for (let occur = 0; occur < strval.length; occur++) 
  {
    if(!common.includes(strval[occur]))
    {
      common.push(strval[occur])
    }
    else{
      com.push(strval[occur])
    }
  }
  com=com.sort();
console.log(common,com);
let stead;

for(let loopnum=0;loopnum<com.length;loopnum++)
{
  for(let loopnum1=0;loopnum1<com.length;loopnum1++)
  {
    if(com[loopnum]==com[loopnum1])
    {
      comnum++;
    }
    
  }
  console.log(com[loopnum],comnum+1);
  if(comnum>comnum1)
  {
    comnum1=comnum;
   stead=com[loopnum]
  }
 comnum=0;
}
console.log(comnum1+1,stead)

}
common("xybbbbefaaag")