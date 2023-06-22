class CuentaBancaria{
    fondos
    constructor(){
        this.fondos = 0;
    }

    asignarFondos(cantidad){
        if (cantidad > 500000) {
            console.log('¡ATENCIÓN! Se han asignado más de 500.000 fondos.');
        }
        this.fondos += cantidad;
    }

    retirarfondos(cantidad){
        if (cantidad > this.fondos){
            console.log('¡ATENCIÓN! No hay suficientes fondos para retirar.');
        } else if (cantidad > 100000){
            console.log('ATENCIÓN! Estas intentando retirar más de 100.000 fondos.');
        } else {
            this.fondos -= cantidad;
        }
    }
}

const cuenta = new CuentaBancaria();

cuenta.asignarFondos(300000);
cuenta.asignarFondos(600000);
cuenta.retirarfondos(190000);
cuenta.retirarfondos(90000);

console.log('Su saldo actual es:', cuenta.fondos);