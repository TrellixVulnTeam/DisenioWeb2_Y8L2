export default class Usuarios {
  datosPersonales =
  [
    {
       codigo: String,
       nombre: String,
       prim_apellido: String,
       seg_apellido: String,
       telefono_1: String,
       telefono_2: String
    }
  ];
  datosTecnicos = [
    {
      login: String,
      contrasena: String
    }
  ];
  privilegios = [
    {
      tipo_privilegio: String
    }
  ];
}

// export default class Usuarios {
//   codigo: String;
//   nombre: String;
//   prim_apellido: String;
//   seg_apellido: String;
//   telefono_1: String;
//   telefono_2: String;
//   login: String;
//   contrasena: String
//   tipo_privilegio: String
// }

// export default class Usuarios {
//   username: string;
//   password: string;
// }

// export default class Usuarios {
//   datosPersonales = [
//     {
//       codigo: String
//     }
//   ];
//   datosTecnicos = [];
//   privilegios = [];
// }
