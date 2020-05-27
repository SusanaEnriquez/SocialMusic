import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  infor = [
    {
      nombre:'Ariana Grande',
      img: 'assets/img/ariana.jpg ',
      des:'Premios',
      fuente: 'Cantante y actriz Ariana Grande ha ganado más de 102 premios durante su carrera. En 2019, Grande lanzó su quinto álbum de estudio, Thank U, Siguiente , que incluye el primer sencillo Thank u next . Grande fue nominada para dos premios en las 61ª Entrega Anual del Grammy , ganando su primer premio al Mejor Álbum Vocal Pop por Edulcorante .'
    },
    {
      nombre:'Jonas Brothers',
      img: ' assets/img/jonas.jpg ',
      des:'Cancelan su recidencia en las Vegas',
      fuente:'Los integrantes de la agrupación de música pop estadounidense Jonas Brothers, se dijeron tristes por tener que cancelar su residencia en Las Vegas, que comenzaría el próximo mes con nueve fechas, debido a la propagación del coronavirus.'
    },
    {
      nombre:'Dua lipa',
      img: 'assets/img/dualipa.jpg ',
      des:'Dua Lipa ha vuelto a cambiar de color de pelo y ahora lo lleva en un tono muy acorde con esta temporada',
      fuente:'Una de las celebridades que más ha cambiado de look durante esta cuarentena es sin duda Dua Lipa. Apenas días atrás mostraba que había escogido el naranja para cubrir su peculiar cabellera, pero parece haber cambiado rápidamente de opinión. '
    },
    {
      nombre:'Jlo y Shakira',
      img: 'assets/img/jlo-y-shakira.jpg ',
      des:'Super bowl 2020',
      fuente:'Un espectáculo de luces, grandes coreografías y el talento de ambas cantantes desataron la polémica en las redes sociales, pues mientras unos alababan lo visto en el escenario otros cargaron en contra por considerarlo obsceno y que cosifica a la mujer.'
    }
  ];

  vertical={
    direction:"vertical",
  };
 
  horizontal={
    direction:"horizontal",
    loop: true,
  };  

  constructor() {}

}
