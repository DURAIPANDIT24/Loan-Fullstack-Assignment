import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heater',
  templateUrl: './heater.component.html',
  styleUrls: ['./heater.component.css']
})
export class HeaterComponent implements OnInit {

  button="createDefect"
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigate(){

this.router.navigate(['/createdefect'])
  }

}
