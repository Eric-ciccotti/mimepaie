import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tarifs",
  templateUrl: "./tarifs.component.html",
})
export class TarifsComponent implements OnInit {
  public items = [
    {
      name: "basic",
      price: 14.9,
      desc: "< 20 bulletins/mois",
    },
    {
      name: "premium",
      price: 13.9,
      desc: ">=20 < 50 bulletins/mois",
    },
    {
      name: "professionnel",
      price: 12.9,
      desc: "> 50 bulletins/mois",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
