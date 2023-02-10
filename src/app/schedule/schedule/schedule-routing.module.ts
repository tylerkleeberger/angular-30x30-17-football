import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ScheduleDetailComponent } from "../schedule-detail/schedule-detail.component";
import { SchedulesListComponent } from "../schedules-list/schedules-list.component";
import { SchedulesComponent } from "../schedules/schedules.component";

const schedulesroutes: Routes = [
    { path: 'schedule', component: SchedulesComponent, 
        children: [
            { path: '', component: SchedulesListComponent, 
                children: [
                    { path: ':id', component: ScheduleDetailComponent}
                ]}
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(schedulesroutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ScheduleRoutingModule { }