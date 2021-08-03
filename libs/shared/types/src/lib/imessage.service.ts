import { Injectable } from "@angular/core";

export type Severity = "info" | "error";

export interface LogItem {
    severity: string;
    message: string;
}

@Injectable({
    providedIn: "root",
})
export abstract class IMessageService {
    abstract logs: LogItem[];
    abstract log: (msg: string, severity: Severity) => void;
}
