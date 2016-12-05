/*
| Buat fungsi yang dapat menemukan key dari object yang valuenya adalah 4
*/

var result = [];

function print(obj, findme) {
  for(var data in obj) {
    if( typeof(obj[data]) == "object" ) {
      print(obj[data], findme)
    } else {
      if(obj[data] == findme) {
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
      p: "www",
    },
    x: 4,
    y: {
      g: 4
    }
  },
  r: 3
};

console.log(print(obj, 9));

// Jika anda menemukan jalan yang lebih perform, silahkan masukkan sangat saya harapkan.