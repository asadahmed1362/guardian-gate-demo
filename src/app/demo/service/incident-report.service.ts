import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IncidentData} from 'src/app/demo/api/incident';

@Injectable({
    providedIn: 'root'
  })
  export class IncidentReportService {
    private postApiUrl = 'https://prod-00.eastus.logic.azure.com/workflows/d0e8c3f0b6ba4f52b98680e01c3e2fc4/triggers/HTTP_Request_Received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FHTTP_Request_Received%2Frun&sv=1.0&sig=jSoPEJ56m2t8Lbp8_IN7EwqFxVdTQ0wJD-sjCsN8j_k';
    private getApiUrl = 'https://prod-00.eastus.logic.azure.com/workflows/d0e8c3f0b6ba4f52b98680e01c3e2fc4/triggers/HTTP_Request_Received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FHTTP_Request_Received%2Frun&sv=1.0&sig=jSoPEJ56m2t8Lbp8_IN7EwqFxVdTQ0wJD-sjCsN8j_k';
  
    constructor(private http: HttpClient) { }
  
    reportIncident(incidentData: IncidentData): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<any>(this.postApiUrl, incidentData, { headers });
    }

    getProducts(): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.get<any>(this.getApiUrl, { headers });
    }

    // Method to get dummy incidents
  getIncidents(): IncidentData[] {
    const incidents: IncidentData[] = [
      {
        incidentId: 1,
        natureOfIncident: 'Robbery',
        numberOfRobbers: 3,
        itemsRobbed: 'Jewelry, Cash',
        injuryOccured: true,
        propertyDamage: true,
        email:'asadahmed1362@hotmail.com',
        status: 'Reported'
      },
      {
        incidentId: 2,
        natureOfIncident: 'Burglary',
        numberOfRobbers: 1,
        itemsRobbed: 'Electronics',
        injuryOccured: false,
        propertyDamage: false,
        email:'asadahmed1362@hotmail.com',
        status: 'Reported'
      },
      {
        incidentId: 3,
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

  }
