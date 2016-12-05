/*
| Buat fungsi yang dapat menemukan key dari object yang valuenya adalah 4
*/

var result = [];

function print(obj) {
  for(var data in obj) {
    if( typeof(obj[data]) == "object" ) {
      print(obj[data])
    } else {
      if(obj[data] == "4") {
        result.push(data)
      }
    }
  }
  return result;
}


/* 
| Contoh Implementasi dengan sample data obj
*/
var obj = {
  a: 4,
  c: 5,
  d: {
    e: 4,
    j: 3,
    l: 4,
    m: {
      n: 9,
      p: 4,
    },
    x: 4,
    y: {
      g: 4
    }
  },
  r: 3
};

console.log(print(obj));