import { Body, Controller, Get, Post, Delete, Param, Patch } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { createTareaDto, UpdateTareaDto } from './dto/tareas.dto'; 
/* ☝🏽 el DTO es un objeto que contiene los tipos de datos que se van a recibir en el body de la petición
 osea se usa en el typeScript para definir los tipos de datos que se van a recibir en el body de la petición, 
 tambien podriamos usar un objeto de tipo interface, pero el DTO es una forma mas elegante de hacerlo y 
 ayuda a realizar validaciones de los datos que se reciben en el body de la petición.
 */

@Controller('tareas') // http://localhost:3000/tareas (GET, POST, PUT, DELETE)
export class TareasController {
  constructor(private readonly tareasService: TareasService) {}


  @Get()
  getTareas() {
    return this.tareasService.getAllTareas();
  }
  @Post()
  createTarea(@Body() nuevaTarea: createTareaDto ) {
    return this.tareasService.createTarea(nuevaTarea.titulo ,nuevaTarea.descripcion,);
  }
  @Delete(":id")
  deleteTarea(@Param("id") id: string) {
    return this.tareasService.deleteTarea(id);
  }
  @Patch(":id")
  updateTarea(@Param("id") id: string, @Body() filas: UpdateTareaDto ) {
    return this.tareasService.updateTarea(id, filas);
  } 
}

