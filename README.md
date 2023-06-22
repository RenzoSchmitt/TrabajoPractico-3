# TrabajoPractico-3
ALUMNOS: SCHMITT RENZO; ZALAZAR TOMAS; MELNICOV LUCAS; DIAZ FRANCO
abstract class Animal{
    abstract hacersonido():void;


}


class Perro extends Animal{
    hacersonido(){
        console.log("Guau")
    }
}
class Gato extends Animal{
    hacersonido(){
        console.log("Miau")
    }
}
