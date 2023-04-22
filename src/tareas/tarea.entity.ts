enum EstadoTarea {
  PENDIENTE = 'PENDIENTE',
  EN_PROGRESO = 'EN_PROGRESO',
  TERMINADA = 'TERMINADA',
}

class Tarea {
  id: string;
  titulo: string;
  descripcion: string;
  estado: EstadoTarea;
}

export { Tarea, EstadoTarea };