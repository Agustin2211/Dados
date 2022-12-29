import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dados';

  dadoIzquierda = "../assets/images/dice1.png"
  dadoDerecha = "../assets/images/dice5.png"
  numero1: number = 0;
  numero2: number = 1;

  tirarDados(): void{
    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;
    this.dadoIzquierda = "../assets/images/dice" + this.numero1 +".png"
    this.dadoDerecha = "../assets/images/dice" + this.numero2 + ".png"

  }
}
