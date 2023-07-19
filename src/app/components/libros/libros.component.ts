import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  irUno(){
    window.location.href = 'https://flip-book-telecenter.web.app/transformaccion';
  }
  irDos(){
    window.location.href = 'https://flip-book-telecenter.web.app/transformaccion2';
  }
  irTres(){
    window.location.href = 'https://flip-book-telecenter.web.app/transformaccion3';
  }

}
