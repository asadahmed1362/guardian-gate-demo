import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {IncidentData, IncidentType} from 'src/app/demo/api/incident';
import { KeyValueOptions } from 'src/app/demo/api/common';

@Injectable({
    providedIn: 'root'
  })
  export class IncidentReportService {
    private postApiUrl = 'https://prod-00.eastus.logic.azure.com/workflows/d0e8c3f0b6ba4f52b98680e01c3e2fc4/triggers/HTTP_Request_Received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FHTTP_Request_Received%2Frun&sv=1.0&sig=jSoPEJ56m2t8Lbp8_IN7EwqFxVdTQ0wJD-sjCsN8j_k';
    private getApiUrl = 'https://prod-27.eastus.logic.azure.com/workflows/04a04e8217094131b68f904f29bed529/triggers/Incidents_Requested/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FIncidents_Requested%2Frun&sv=1.0&sig=r1l3zXTMDG9S3uDDbvV-Tyum38cjKY3mUnRqwYrt6zk';
  
    constructor(private http: HttpClient) { }
  
    reportIncident(incidentData: IncidentData): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<any>(this.postApiUrl, incidentData, { headers });
    }

    getIncidentsFromAPI(): Observable<IncidentData[]>{
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.get<IncidentData[]>(this.getApiUrl, { headers });
    }

    getIncidentTypes(): IncidentType[]{
      return [
        { code: 1, name: "Commercial Break and Enter" },
        { code: 2, name: "Robbery" },
        { code: 3, name: "Shoplifting" },
        { code: 4, name: "Theft Under $5,000" },
        { code: 5, name: "Theft Over $5,000" },
        { code: 6, name: "Fraud" },
        { code: 7, name: "Organized Retail Crime" },
        { code: 8, name: "Vandalism" },
        { code: 9, name: "Possession of Stolen Property" },
        { code: 10, name: "Robbery with a Firearm" }
      ];
    }

    getTrueFalseOptions(): KeyValueOptions[]{
      return [
        { code: 1, name: "True" },
        { code: 2, name: "False" }
      ];
    }

    // Method to get dummy incidents
  getIncidents(): IncidentData[] {
    const incidents: IncidentData[] = [
      {
        RowKey	: "1",
        natureOfIncident: 'Robbery',
        numberOfRobbers: 3,
        itemsRobbed: 'Jewelry, Cash',
        injuryOccured: true,
        propertyDamage: true,
        email:'asadahmed1362@hotmail.com',
        status: 'Reported'
      },
      {
        RowKey	: "2",
        natureOfIncident: 'Burglary',
        numberOfRobbers: 1,
        itemsRobbed: 'Electronics',
        injuryOccured: false,
        propertyDamage: false,
        email:'asadahmed1362@hotmail.com',
        status: 'Reported'
      },
      {
        RowKey	: "3",
        natureOfIncident: 'Assault',
        numberOfRobbers: 2,
        itemsRobbed: '',
        injuryOccured: true,
        propertyDamage: false,
        email:'asadahmed1362@hotmail.com',
        status: 'Reported'
      },
    ];

    return incidents;
  }

  getDummyIncidents(): Observable<IncidentData[]> {
    const incidents: IncidentData[] = [
      {
        RowKey	: "1",
        natureOfIncident: 'Robbery',
        numberOfRobbers: 3,
        itemsRobbed: 'Jewelry, Cash',
        injuryOccured: true,
        propertyDamage: true,
        email: 'asadahmed1362@hotmail.com',
        status: 'Reported',
        timestamp: new Date('2023-01-15T10:00:00Z'),
      },
      {
        RowKey	: "2",
        natureOfIncident: 'Shoplifting',
        numberOfRobbers: 1,
        itemsRobbed: 'Clothing',
        injuryOccured: false,
        propertyDamage: false,
        email: 'asadahmed1362@hotmail.com',
        status: 'Reported',
        timestamp: new Date('2023-03-22T14:30:00Z'),
      },
      {
        RowKey	: "3",
        natureOfIncident: 'Theft Under $5,000',
        numberOfRobbers: 2,
        itemsRobbed: 'Electronics',
        injuryOccured: false,
        propertyDamage: true,
        email: 'asadahmed1362@hotmail.com',
        status: 'Investigating',
        timestamp: new Date('2023-05-10T09:00:00Z'),
      },
      {
        RowKey	: "4",
        natureOfIncident: 'Fraud',
        numberOfRobbers: 1,
        itemsRobbed: 'Credit Card',
        injuryOccured: false,
        propertyDamage: false,
        email: 'asadahmed1362@hotmail.com',
        status: 'Reported',
        timestamp: new Date('2023-07-30T13:15:00Z'),
      },
      {
        RowKey	: "5",
        natureOfIncident: 'Theft Over $5,000',
        numberOfRobbers: 4,
        itemsRobbed: 'Luxury Car',
        injuryOccured: false,
        propertyDamage: true,
        email: 'asadahmed1362@hotmail.com',
        status: 'Resolved',
        timestamp: new Date('2023-11-18T16:45:00Z'),
      },
      {
        RowKey	: "6",
        natureOfIncident: 'Robbery',
        numberOfRobbers: 3,
        itemsRobbed: 'Cash',
        injuryOccured: true,
        propertyDamage: false,
        email: 'asadahmed1362@hotmail.com',
        status: 'Reported',
        timestamp: new Date('2024-01-10T11:00:00Z'),
      },
      {
        RowKey	: "7",
        natureOfIncident: 'Shoplifting',
        numberOfRobbers: 2,
        itemsRobbed: 'Groceries',
        injuryOccured: false,
        propertyDamage: false,
        email: 'asadahmed1362@hotmail.com',
        status: 'Reported',
        timestamp: new Date('2024-03-05T14:00:00Z'),
      },
      {
        RowKey	: "8",
        natureOfIncident: 'Theft Under $5,000',
        numberOfRobbers: 1,
        itemsRobbed: 'Smartphone',
        injuryOccured: false,
        propertyDamage: true,
        email: 'asadahmed1362@hotmail.com',
        status: 'Investigating',
        timestamp: new Date('2024-06-12T09:30:00Z'),
      },
      {
        RowKey	: "9",
        natureOfIncident: 'Fraud',
        numberOfRobbers: 2,
        itemsRobbed: 'Bank Account',
        injuryOccured: false,
        propertyDamage: false,
        email: 'asadahmed1362@hotmail.com',
        status: 'Resolved',
        timestamp: new Date('2024-08-22T15:00:00Z'),
      },
      {
        RowKey	: "10",
        natureOfIncident: 'Theft Over $5,000',
        numberOfRobbers: 3,
        itemsRobbed: 'Jewelry',
        injuryOccured: false,
        propertyDamage: true,
        email: 'asadahmed1362@hotmail.com',
        status: 'Reported',
        timestamp: new Date('2024-12-30T18:20:00Z'),
      },
      {
        RowKey	: "11",
        natureOfIncident: 'Shoplifting',
        numberOfRobbers: 2,
        itemsRobbed: 'Groceries',
        injuryOccured: false,
        propertyDamage: false,
        email: 'asadahmed1362@hotmail.com',
        status: 'Reported',
        timestamp: new Date('2024-07-20T14:00:00Z'),
      }
    ];

    // Return the incidents array as an Observable
    return of(incidents);
  }

  }
