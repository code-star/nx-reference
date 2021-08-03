import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessageService } from "./message/message.service";

@NgModule({
    imports: [CommonModule],
    declarations: [MessageService],
    exports: [MessageService],
})
export class SharedServicesModule {}
