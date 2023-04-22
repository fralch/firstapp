import { Body, Controller, Get, Post } from '@nestjs/common';
import { TareasService } from './tareas.service';

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
}

