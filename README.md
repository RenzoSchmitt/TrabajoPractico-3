# TrabajoPractico-3
ALUMNOS: SCHMITT RENZO; ZALAZAR TOMAS; MELNICOV LUCAS; DIAZ FRANCO
class PartidoPolitico {
    nombre:string;
    candidatos:[];
    constructor(nombre:string,) {
    this.nombre = nombre;
    this.candidatos = [];
    }
    agregarCandidato(candidato) {
    this.candidatos.push(candidato);
    }
    }
    
    class Candidato {
    nombre:string;
    partido:string;
    listas:[]
    constructor(nombre, partido) {
    this.nombre = nombre;
    this.partido = partido;
    this.listas = [];
    
    }
    agregarLista(lista) {
     this.listas.push(lista);
    }
    }
    
    class Lista {
    nombre:string;
    candidato:string;
    votos:number;
    constructor(nombre, candidato) {
    this.nombre = nombre;
    this.candidato = candidato;
    this.votos = 0;
    }
    

    
    incrementarVotos() {
    this.votos++;
    }
}
    class Votante {
    nombre:string;
    dni:number;
    votoRealizado

    constructor(nombre:string, dni:number) {
    this.nombre = nombre;
    this.dni = dni;
    this.votoRealizado = false;
    }
    
    votar() {
    this.votoRealizado = true;
    }
    }
    
    class Voto {
        votante:string;
        lista:string;
    constructor(votante:string, lista:string) {
    this.votante = votante;
    this.lista = lista;
    }
    }
