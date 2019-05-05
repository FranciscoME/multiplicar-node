//requireds
const fs = require('fs');


// let listarTabla = (base,hasta)=>{
//     return new Promise((resolve,reject)=>{
//         if(!Number(base) || !Number(hasta)){
//             reject('base -hasta no son un numero');return;
//         }

//         let data='';

//         for (let i = 1; i < hasta; i++) {
//             data+= `${base} * ${i}  = ${base * i} \n`;  
//         }

//         resolve(data);

//     })
// }


let listarTabla = (base,limite)=>{
    return new Promise((resolve,reject)=>{
        if(!Number(base) || !Number(limite)){
            reject('base -hasta no son un numero');return;
        }

        let data='';

        for (let i = 1; i <= limite; i++) {
            data+= `${base} * ${i}  = ${base * i} \n`;  
        }

        resolve(data);

    })
}



let crearArchivo= (base, limite)=>{
    return new Promise((resolve,reject)=>{

        if(!Number(base) || !Number(limite)){
            reject('la base o el limite no es un número');
            return;
        }

    let data='';

    for (let i = 1; i <= limite; i++) {
        data+= `${base} * ${i}  = ${base * i} \n`;  
    }


    fs.writeFile(`tablas/tabla-${base}.txt`,data,(err)=>{
        if(err)
        throw reject(err);
        else
            resolve(`El archivo tabla-${base}.txt ha sido generado`)       
    })

    });
}



module.exports = {
    crearArchivo,
    listarTabla
}

