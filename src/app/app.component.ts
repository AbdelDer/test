import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  editableResponsable : boolean[] = [false, false];
  currentDate = new Date();
  responsables : Responsable[] = [
    {
      "nom": "Scabandra Lbahria",
      "role": "Directeur General",
      "numero": "+125649763665",
      "email": "scabandra@mail.com"
    },
    {
      "nom": "Sridina Wld Lhay",
      "role": "Directeur",
      "numero": "+135485663557",
      "email": "sridina@mail.com"
    }
  ];

  change(event) {
    console.log(this.currentDate);
  }

  addResponsable() {
    this.responsables[this.responsables.length] = {
      "nom" : "cliquez",
      "email" : "tapez entrez pour valider",
      "numero" : "remplir",
      "role" : "pour"
    }
  }
}

export interface Responsable {
  nom: string;
  role: string;
  numero: string;
  email: string;
}
