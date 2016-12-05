/*
| Buat fungsi yang dapat menemukan value array jika ditambahkan menghasilkan nilai yang sama dengan s
*/

function findPair(arr, s){
  var result = {a:[], b:[]};
  for(var i in arr) {
    for(var j in arr) {
      if(parseInt(arr[i]) + parseInt(arr[j]) == s){
        result.a[j] = arr[j];
        result.b[j] = arr[i];
      }
    }
  }
  return result;
}

/* 
| Contoh Implementasi dengan sample data obj
*/
console.log(findPair([3,4,1,2,5,6,1,2], 6));

// Jika anda menemukan jalan yang lebih perform, silahkan masukkan sangat saya harapkan.