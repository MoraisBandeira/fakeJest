const expect = (result)=>({
   toBe:(expected)=>{
    if(result == expected){
        console.log('\x1b[32m','🚀 ------------------> Teste Passou!');
    }else{
        console.log('\x1b[31m','🔥 ------------------> Teste Falhou!');  
    }   
   },
   notToBe:(expected)=>{
    if(result != expected){
        console.log('\x1b[32m','🚀 ------------------> Teste Passou!');
    }else{
        console.log('\x1b[31m','🔥 ------------------> Teste Falhou!');  
    }  
   }
});

const it = (description,cb)=>{
    console.log('---', description);
    cb();
}

module.exports = {expect,it};