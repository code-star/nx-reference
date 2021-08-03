import { Component, Input } from "@angular/core";

@Component({
    selector: "star-app-template[title]",
    templateUrl: "./app-template.component.html",
    styleUrls: ["./app-template.component.scss"],
})
export class AppTemplateComponent {
    @Input() title = "";
}
