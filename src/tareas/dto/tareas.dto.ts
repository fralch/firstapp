// que es un DTO (Data Transfer Object) es un objeto que se utiliza para transferir datos entre subsistemas de un software.
import { EstadoTarea } from "../tarea.entity";
import { IsString } from 'class-validator';

class createTareaDto {
    @IsString()
    readonly titulo: string;
    readonly descripcion: string;
    readonly estado: boolean;
}

class UpdateTareaDto {
    readonly titulo?: string;
    readonly descripcion?: string;
    readonly estado?: EstadoTarea;
}

export { createTareaDto, UpdateTareaDto };