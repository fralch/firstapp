import { Body, Controller, Get, Post, Delete, Param, Patch } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { EstadoTarea} from './tarea.entity';

@Controller('tareas') // http://localhost:3000/tareas (GET, POST, PUT, DELETE)
export class TareasController {
  constructor(private readonly tareasService: TareasService) {}


  @Get()
  getTareas() {
    return this.tareasService.getAllTareas();
  }
  @Post()
  createTarea(@Body() nuevaTarea: {titulo: string, descripcion: string}) {
    return this.tareasService.createTarea(nuevaTarea.titulo,nuevaTarea.descripcion,);
  }
  @Delete(":id")
  deleteTarea(@Param("id") id: string) {
    return this.tareasService.deleteTarea(id);
  }
  @Patch(":id")
  updateTarea(@Param("id") id: string, @Body() filas: {titulo?: string, descripcion?: string, estado?: EstadoTarea}) {
    return this.tareasService.updateTarea(id, filas);
  } 
}

