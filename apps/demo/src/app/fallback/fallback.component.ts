import { Component, OnInit } from "@angular/core";
import { LogItem } from "@star/shared/types";

@Component({
    selector: "star-fallback",
    templateUrl: "./fallback.component.html",
    styleUrls: ["./fallback.component.scss"],
})
export class FallbackComponent {
    alertItem: LogItem = {
        severity: "error",
        message:
            "Remote component can't be loaded, because ModuleFederation is not configured for Storybook yet. Instead, visit https://code-star.github.io/nx-reference-shell/ to see ModuleFederation integration.",
    };

    constructor() {}
}
