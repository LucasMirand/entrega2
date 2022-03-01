const operacion = async(num1:number, num2:number, cuenta:string)=>{
    let operaciones = await import('./operacion.js');
    let res= operaciones.operar(num1,num2,cuenta)
    return res
}

const operaciones = async(num1:number,num2:number, cuenta:string)=>{
    let resultado = await operacion(num1,num2,cuenta)
    console.log(resultado);
}

operaciones(2,4,'suma')
operaciones(8,4,'resta')