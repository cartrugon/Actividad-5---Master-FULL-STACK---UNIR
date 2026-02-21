import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INoticia } from '../../interfaces/inoticia.interface';
import { NOTICIAS } from '../../db/noticia.db';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})

export class BlogComponent {

  nuevaNoticia: INoticia= {id:0, titulo:"", foto:"", descripcion:"", fecha:"" } 
  arrayNoticia: INoticia[]= NOTICIAS //inicializamos asi, aunque podriamos haberlo hecho con un construtor. Necesitamos que cargue las dos primeras noticias.



  cargarNoticia():void {

    if(!this.nuevaNoticia.titulo || !this.nuevaNoticia.foto ||!this.nuevaNoticia.descripcion ||!this.nuevaNoticia.fecha){
    alert("Todos los campos son obligatorios");
    return;
    }
    this.arrayNoticia.push({...this.nuevaNoticia})
  
    console.log(this.arrayNoticia)
    this.nuevaNoticia= {id:0, titulo:"", foto:"", descripcion:"", fecha:"" }



  }



}
