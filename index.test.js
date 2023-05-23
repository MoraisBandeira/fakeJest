const soma = require('.');
const {expect ,it} = require('./fakeJest');

it('Teste de software',()=>{ 
    const n1 = 10;
    const n2 = 15;
    const result = soma(n1,n2);
    expect(result).toBe(30);
    expect(result).notToBe(30);
})


