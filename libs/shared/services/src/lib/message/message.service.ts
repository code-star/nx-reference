import { Injectable } from "@angular/core";
import { IMessageService, LogItem, Severity } from "@star/shared/types";

@Injectable({
    providedIn: "root",
})
export class MessageService implements IMessageService {
    logs: LogItem[] = [];

    log(message: string, severity: Severity) {
        // Do not push to the array, but create a new one, to make it possible to use a pure pipe
        this.logs = [
            ...this.logs,
            {
                message,
                severity,
            },
        ];
    }

    clear() {
        this.logs = [];
    }
}
