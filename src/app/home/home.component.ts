import { Component, OnInit } from '@angular/core';
import { TemporizadorService } from '../temporizador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public timer: TemporizadorService) {
    this.timer.start;
   }

  ngOnInit() {
  }

}