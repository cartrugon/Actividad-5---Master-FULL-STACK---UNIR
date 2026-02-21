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

  nuevaNoticia: INoticia= {titulo:"", foto:"", descripcion:"", fecha:"" }
  arrayNoticia: INoticia[]= NOTICIAS



  cargarNoticia():void {
    this.arrayNoticia.push({...this.nuevaNoticia})
  
    console.log(this.arrayNoticia)
    this.nuevaNoticia= {titulo:"", foto:"", descripcion:"", fecha:"" }



  }



}
