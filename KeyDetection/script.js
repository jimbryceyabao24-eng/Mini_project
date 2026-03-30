const press = [];
const secretCode = 'letsgo'; 

window.addEventListener('keyup', (e) =>{
    console.log(e.key);
    press.push(e.key);
    press.splice(-secretCode.length -1, press.length - secretCode.length);
    if(press.join('').includes(secretCode)){
        console.log("Ding Ding! You did it.");
        cornify_add();
    }
    console.log(press);
});