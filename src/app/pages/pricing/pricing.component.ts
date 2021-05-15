import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pricing",
  templateUrl: "./pricing.component.html",
  styleUrls: ["./pricing.component.scss"],
})
export class PricingComponent implements OnInit {
  messages: string[];

  constructor() {}

  ngOnInit() {
    this.messages = [
      "Contrat de travail _ DPAE_Avenants_Attestations_ ",
      "Certificats_Attestation Pole Emploi_DSN ",
      "évènementielle_DSN Mensuelle_Etats post Paie",
    ];
  }
}
