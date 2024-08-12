import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IncidentDashboardComponent } from './incident-dashboard.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { IncidentDashboardsRoutingModule } from './incident-dashboard-routing.module';
import { TagModule } from 'primeng/tag';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        IncidentDashboardsRoutingModule,
        TagModule
    ],
    declarations: [IncidentDashboardComponent]
})
export class IncidentDashboardModule { }
