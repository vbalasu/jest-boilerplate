const app = require('./app');

test('Home should be sweet', ()=>{
    expect(app.home()).toBe('sweet home');
});