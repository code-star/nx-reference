import { Pipe, PipeTransform } from "@angular/core";
import { LogItem, Severity } from "@star/shared/types";

@Pipe({
    name: "bySeverity",
})
export class BySeverityPipe implements PipeTransform {
    transform(value: LogItem[], severity: Severity) {
        return value.filter((item) => item.severity === severity);
    }
}
