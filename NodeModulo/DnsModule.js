const dns=require("dns");
console.log(dns);
 dns.lookup("masaischool.com",(err,address)=>{
    if(err){
        console.log(err);
    }else{
        console.log(address);
    }
 })