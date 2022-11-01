import fs from 'fs';
// Blocking code
// const data = fs.readFileSync('./test.md');
// console.log(data);
// console.log('Hacer mas trabajo!! Aceptar peticiones de la read, leer mas archivo') // <-- Sale despues 

// Non-blocking code
const funcC = () => console.log('Foo/bar');
fs.readFile('./test.md', (err, data) => {

    if (err) throw err;


    funcC();

    
    console.log(data);

    
})
const funcA = () => console.log('Hacer mas trabajo!! Aceptar peticiones de la read, leer mas archivo') // <-- Sale primero
funcA();

process.nextTick(() => {

    console.log('Callback before the next event loop tick starts')
    setTimeout(() => {
        console.log('Esto es async')
    }, 0);
    

});

const funcB = () => console.log('Probando el eventLoop') // <-- DEspues del buffer // Antes
funcB();


// full strip -> nextTick -> full trip -> nextTick

// -> Process A

// -> Process B