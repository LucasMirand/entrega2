

class Calcular{
    num1:number
    num2:number
    cuenta:string
    constructor(num1:number,num2:number, cuenta:string){
        this.num1=num1;
        this.num2=num2;
        this.cuenta=cuenta
    }
    resultado(){
        if(this.cuenta==='resta'){return this.num1-this.num2}
        if(this.cuenta==='suma'){return this.num1+this.num2}
    }

}

export const operar = (num1:number,num2:number,cuenta:string)=>{
    return new Promise((res,rej)=>{
        if (cuenta==='suma'||cuenta==='resta') {
            let operacion: Calcular
            operacion = new Calcular(num1,num2,cuenta)
            res(operacion.resultado())
        } else {
            rej('No se encontró esa operacion')
        }
    })
}