const promise1 = new Promise(function (resolve, reject) {
    reject('error!');
  });
  
  promise1.then(function (value) {
    console.log(value);
    // expected output: "Success!"
  }).catch((error)=>{
    console.log(error);
  });