import { Component } from '@angular/core';

class Conteiner {
  dados: Dados;
}

class Dados {
  score: any;
}


class Ordinal  {

  public name: string;
  public value: string;

  constructor(name: string, value: string) {
    this.name = name;
    this.value = value;
  }

  toString() {
    return this.value;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  o1: Ordinal = new Ordinal('teste', '987654321'); // chama toString() sobrescrito

  // não chamam toString() sobrescrito
  o2: Ordinal = {name: 'teste2', value: '1000'};

  // função hardCoded
  o3: Ordinal = {name: 'teste3', value: '2000', toString: function() {return this.value; } };

  // valor literal escrito normalmente
  c1: Conteiner = {dados: {score: 1}};

  // o valor score é um objeto Ordinal. Seu toString() não é chamado.
  c2: Conteiner = {dados: {score: {name: 'teste', value: '2'}}};

  // Atribuindo um objeto Ordinal criado na sintaxe do new Ordinal()
  c3: Conteiner = {dados: {score: this.o1}};
}
