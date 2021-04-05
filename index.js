
const gifts = ["teddy bear", "drone", "doll"];
 let array1;
function writeCards(names,event) {
  let array = [];
  for (let i = 0; i < names.length; i++) {
<<<<<<< HEAD
    array [i] =`Thank you, ${names[i]}, for the wonderful ${event} gift!`;
=======
    array [i] =`Thank you, ${names[i]}, for the wonderful ${event}  gift!`;
>>>>>>> e8b4d364168f0a34070d79369d0cb37a8d258ecd
  }

  return array;
}

<<<<<<< HEAD
writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");


function countDown(num){
  let sum;
  while(num>=0){
    console.log(num)
    sum+=num;
    num--;
  }
}
countDown(10);
=======
writeCards(["Lisa", "Kaitlin", "Jan"], "birthday");
>>>>>>> e8b4d364168f0a34070d79369d0cb37a8d258ecd
