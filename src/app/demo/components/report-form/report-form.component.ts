import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { IncidentReportService } from '../../service/incident-report.service';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import {IncidentData, IncidentType} from 'src/app/demo/api/incident';
import { KeyValueOptions } from '../../api/common';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    templateUrl: './report-form.component.html',
    providers: [MessageService],
    styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit, OnDestroy {
    // incidentData: IncidentData = {
    //     RowKey: "1",
    //     natureOfIncident: 'Robbery',
    //     numberOfRobbers: 2,
    //     itemsRobbed: 'Cash and Jewelry',
    //     injuryOccured: true,
    //     propertyDamage: true,
    //     email:'asadahmed1362@hotmail.com',
    //     status: 'Reported'
    // };
    
    incidentDialog: boolean = false
    incidentTypes : IncidentType[] = [];
    filteredIncidentTypes : IncidentType[] = [];
    incidents : IncidentData[] = [];
    selectedItem:any;
    
    trueFalseOptions : KeyValueOptions[] = [];

    incident:IncidentData = {
        injuryOccured: false,
        propertyDamage: false,
    };

    selectedIncidents: IncidentData[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    items!: MenuItem[];

    subscription!: Subscription;

    constructor(private incidentReportService: IncidentReportService, public layoutService: LayoutService,
        private messageService: MessageService
    ) {
        this.subscription = this.layoutService.configUpdate$.subscribe(() => {
            
        });
    }

    ngOnInit() {
        this.incidentTypes =  this.incidentReportService.getIncidentTypes();
        this.trueFalseOptions = this.incidentReportService.getTrueFalseOptions();
        this.incidentReportService.getIncidentsFromAPI().subscribe(response => {
            this.incidents =  response;
          }, error => {
            console.error('Error loading incident:', error);
            
          });
        

        this.cols = [
            { field: 'incident', header: 'Incident' },
            { field: 'RowKey', header: 'Incident Id' },
            { field: 'natureOfIncident', header: 'Nature Of Incident' },
            { field: 'inventoryStatus', header: 'Status' }
        ];

        this.statuses = [
            { label: 'Reported:', value: 'reported' },
            { label: 'UNDERINVESTIGATION', value: 'UnderInvestigation' },
            { label: 'PENDING', value: 'pending' },
            { label: 'RESOLVED', value: 'resolved' }
        ];
    }

    openNew() {
        this.incidentDialog = true;
        this.incident = {};
        this.submitted = false;
    }

    hideDialog() {
        this.incidentDialog = false;
        this.submitted = false;
        this.selectedItem = '';
    }

    saveIncident() {
        if(!this.isValid())
            return;
        this.submitted = true;
        this.incident.status = "Reported";
        this.incident.email = "asadahmed1362@hotmail.com";
        this.incident.natureOfIncident = this.selectedItem.name;
        this.incidentReportService.reportIncident(this.incident)
          .subscribe(response => {
            this.messageService.add({severity:'success', summary:'Incident Reported', detail:'Incident has been generated : '+ response.IncidenceReference});
            this.incident.RowKey = response.IncidenceReference;
            this.incidents.push(this.incident);
            this.incidentDialog = false;
            this.incident = {
                injuryOccured: false,
                propertyDamage: false,
            };
          }, error => {
            console.error('Error reporting incident:', error);
            alert('Error reporting incident!');
            this.submitted = false;
          });
    }

    filterIncidentType(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.incidentTypes as any[]).length; i++) {
            let incidentType = (this.incidentTypes as any[])[i];
            if (incidentType.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(incidentType);
            }
        }

        this.filteredIncidentTypes = filtered;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    isValid(): boolean {
        // Validate that natureOfIncident is not empty

        if (!this.selectedItem || this.selectedItem.name === '') {
            return false;
          }
    
        // Validate that numberOfRobbers is not null and greater than or equal to 1
        if (!this.incident.numberOfRobbers  || this.incident.numberOfRobbers < 1) {
          return false;
        }
    
        // Validate that itemsRobbed is not empty
        if (!this.incident.itemsRobbed || this.incident.itemsRobbed === '') {
          return false;
        }

        // If all checks pass, the data is valid
        return true;
      }
}
