abstract class Animal{
    abstract hacer_sonido(): void;
}

class Perro extends Animal{
    hacer_sonido(){
        console.log("guau")
    }
}

class Gato extends Animal{
    hacer_sonido(){
        console.log("miau")
    }
}
