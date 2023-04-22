import { Injectable } from '@nestjs/common';
import {Tarea, EstadoTarea} from './tarea.entity';

@Injectable()
export class TareasService {

    private tareas: Tarea[] = [
        {
            id: "1",
            titulo: 'Tarea 1',
            descripcion: 'Descripción de la tarea 1',
            estado: EstadoTarea.PENDIENTE,
        },              
    ]
    
    getAllTareas (){
        return  this.tareas; 
    }

    createTarea(titulo: string, descripcion: string){
        const tarea: Tarea = {
            id: new Date().toISOString(),
            titulo,
            descripcion,
            estado: EstadoTarea.PENDIENTE,
        };
        this.tareas.push(tarea);
        return tarea;
    }
    deleteTarea(id: string){
        this.tareas = this.tareas.filter(tarea => tarea.id !== id);
        return this.tareas;
    }   
    updateTarea(id: string, filas: {titulo?: string, descripcion?: string, estado?: EstadoTarea}){
        const tarea = this.tareas.find(tarea => tarea.id === id);
        if(!tarea){
            return null;
        }
        const nuevaTarea = {...tarea, ...filas};
        this.tareas = this.tareas.map(tarea => tarea.id === id ? nuevaTarea : tarea);
        return nuevaTarea;
    }
}
