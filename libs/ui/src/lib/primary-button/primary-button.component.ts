import { Component, Input } from "@angular/core";

/**
 * Some primary button documentation. This is an atom, a UI component. Presentational, without state.
 *
 * Usage: `<star-primary-button>label</star-primary-button>`
 *
 * @example
 * `<star-primary-button>label</star-primary-button>`
 */
@Component({
    selector: "star-primary-button",
    templateUrl: "./primary-button.component.html",
    styleUrls: ["./primary-button.component.scss"],
})
export class PrimaryButtonComponent {
    /**
     * When true, clicking the button has no effect
     */
    @Input() disabled = false;
}
