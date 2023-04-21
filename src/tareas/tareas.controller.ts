import { Controller, Get } from '@nestjs/common';

@Controller('tareas') // http://localhost:3000/tareas (GET, POST, PUT, DELETE)
export class TareasController {
  @Get()
  helloworld() {
    return 'Hello World!';
  }
}
