import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IncidentDashboardComponent } from './incident-dashboard.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: IncidentDashboardComponent }
    ])],
    exports: [RouterModule]
})
export class IncidentDashboardsRoutingModule { }
