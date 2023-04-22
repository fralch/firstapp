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
}
