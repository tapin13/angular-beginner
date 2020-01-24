import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventsComponent, EventsObjectComponent, TemplateRefComponent, KeyEnterComponent, BlurComponent, MyListComponent } from "./index";

@NgModule({
    declarations: [
        EventsComponent,
        EventsObjectComponent,
        TemplateRefComponent,
        KeyEnterComponent,
        BlurComponent,
        MyListComponent
    ],
    imports: [CommonModule]
})
export class InputModule {}
