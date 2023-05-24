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
   },
   toBeTruthy:()=>{
    if(result){
        console.log('\x1b[32m','🚀 ------------------> Teste Passou!');
    }else{
        console.log('\x1b[31m','🔥 ------------------> Teste Falhou!');  
    }
   },
   toBeFalsy:()=>{
    if(!result){
        console.log('\x1b[32m','🚀 ------------------> Teste Passou!');
    }else{
        console.log('\x1b[31m','🔥 ------------------> Teste Falhou!');  
    }
   },
   toHaveLength:()=>{
    if(result.lenght != 0){
        console.log('\x1b[32m','🚀 ------------------> Teste Passou!');
    }else{
        console.log('\x1b[31m','🔥 ------------------> Teste Falhou!');  
    }
   },
   toBeInstanceOf:(expected)=>{
    if(typeof result == typeof expected){
        console.log('\x1b[32m','🚀 ------------------> Teste Passou!');
    }else{
        console.log('\x1b[31m','🔥 ------------------> Teste Falhou!');  
    }
   },
   toBeNull:()=>{
    if(result === null){
        console.log('\x1b[32m','🚀 ------------------> Teste Passou!');
    }else{
        console.log('\x1b[31m','🔥 ------------------> Teste Falhou!');  
    }
   },
   toBeNaN:()=>{
    if(result === 'NaN'){
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