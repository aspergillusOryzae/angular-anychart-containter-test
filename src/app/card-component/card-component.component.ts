import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import "bootstrap";

@Component({
  selector: "app-card-component",
  templateUrl: "./card-component.component.html",
  styleUrls: ["./card-component.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class CardComponentComponent implements OnInit {
  @Input() dataSet;

  constructor() {}

  ngOnInit() {}
}
