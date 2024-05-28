


const fs=require('fs');

//readFile
//fs.readFile('file.txt','utf8',(err,data)=>{
  //  console.log(err,data)
//})



//readFileSync
//const a= fs.readFileSync('file.txt')
//console.log(a.toString())
//console.log("finished reading file")
//fs.writeFile('text2.txt',"this is a text file ",()=>{
   //console.log("file written successfully ")
//});

//writeFileSync

b=fs.writeFileSync('file2.txt',"this is a text2")
console.log(b)
console.log("file writing completed")
