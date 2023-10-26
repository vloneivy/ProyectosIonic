export class Usuario {

    correo = '';
    password = '';
    nombre = '';
    apellido = '';
    preguntaSecreta = '';
    respuestaSecreta = '';
  
    constructor() { }

    setUsuario(correo: string, password: string, nombre: string, apellido: string, preguntaSecreta: string, respuestaSecreta: string) {
        this.correo = correo;
        this.password = password;
        this.nombre = nombre;
        this.apellido = apellido;
        this.preguntaSecreta = preguntaSecreta;
        this.respuestaSecreta = respuestaSecreta;
      }

    
}
