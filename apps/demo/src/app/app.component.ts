import { Component, OnInit } from "@angular/core";
import { MessageService } from "@star/shared/services";
import { Rate } from "@star/shared/types";
import { BtcRateService } from "@star/shared/data-access";

@Component({
    selector: "star-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
    title = "Nx Reference";
    loading = false;
    rates: [number, Rate][] = [];

    constructor(
        public messageService: MessageService,
        private btcRateService: BtcRateService
    ) {}

    getRate(): void {
        this.loading = true;
        this.btcRateService.getRate().subscribe((item) => {
            this.rates.push(item);
            this.loading = false;
        });
    }

    ngOnInit(): void {
        this.getRate();
    }
}
