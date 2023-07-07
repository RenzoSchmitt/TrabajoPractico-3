interface Tarea {
    id: number;
    descripcion: string;
    completada: boolean;
  }
  
  class ListaTareas {
    private tareas: Tarea[];
  
    constructor() {
      this.tareas = [];
    }
  
    agregarTarea(tarea: Tarea): void {
      this.tareas.push(tarea);
    }
  
    marcarTareaCompleta(id: number): void {
      const tareaEncontrada = this.tareas.find(tarea => tarea.id === id);
      if (tareaEncontrada) {
        tareaEncontrada.completada = true;
      }
    }
  
    listarTareas(): void {
      this.tareas.forEach(tarea => {
        console.log(`ID: ${tarea.id} - Descripción: ${tarea.descripcion} - Completada: ${tarea.completada}`);
      });
    }
  }