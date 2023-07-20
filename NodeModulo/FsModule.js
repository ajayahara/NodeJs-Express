const fs=require("fs");
// console.log(fs)
// fs.readFile
    // Synchronous:-
    // const data= fs.readFileSync("./data.txt",{encoding:"utf-8"}) 
    // console.log(data);  
    //Asynchronus
    // const FileReading= async ()=>{
    //     try {
    //         const data=await fs.readFile("./mynewfile2.txt","utf-8")
    //         console.log(data);
    //       } catch (error) {
    //           console.log(error);
    //       }
    // }
    // FileReading()
// fs.writeFile(Overwrite In The File)
    // Synchonous:-
        // fs.writeFileSync("./data.txt","Hi from writeFileSync")
    // Asynchronous:-
        // fs.writeFile("./data.txt","Hi from writeFile",(err)=>{
        //     console.log(err)
        // })
// fs.appendFile(Update Only);
    // fs.appendFile("./data.txt","\n hi from appendFile",(err)=>{
    //     if(err){
    //         console.log(err);
    //     }else{
    //         console.log("Saved")
    //     }
    // });
// fs.rename(Rename A File)
    // fs.rename("./data.txt","./RenamedData.txt");
// fs.unlink(Delete The File)
    // fs.unlink("./RenamedData.txt");
// fs.open(Create a file);
// fs.open('mynewfile2.txt','w',0o666);
// fs.copy


        

