import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { IncidentData } from '../../api/incident';
import { IncidentReportService } from '../../service/incident-report.service';

@Component({
    templateUrl: './incident-dashboard.component.html',
    styleUrls: ['./incident-dashboard.component.css']
})
export class IncidentDashboardComponent implements OnInit, OnDestroy {

    items!: MenuItem[];

    products!: Product[];

    chartData: any;
    robberyCard: any;
    shopliftingCard:any;
    theftUnderFiveK: any;
    theftOverFiveK:any;

    chartOptions: any;

    subscription!: Subscription;

    constructor(private incidentReportService: IncidentReportService, private productService: ProductService, public layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(() => {
            this.initChart();
        });
    }

    ngOnInit() {
        this.initChart();
        this.productService.getProductsSmall().then(data => this.products = data);

        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
    }

    processIncidents(
        incidents: IncidentData[],
        natureOfIncident: string,
        timestamp: Date
      ): {
        howmanyweeks_now_since_timestamp: number;
        count_of_incidents_after_timestamp: number;
        total_count_of_incidents_for_this_incidentType: number;
      } {
        // Calculate the number of weeks between the timestamp and now
        const now = new Date();
        const millisecondsInAWeek = 1000 * 60 * 60 * 24 * 7;
        const howmanyweeks_now_since_timestamp = Math.floor(
          (now.getTime() - timestamp.getTime()) / millisecondsInAWeek
        );
      
        // Filter incidents based on the natureOfIncident
        const filteredIncidents = incidents.filter(
          (incident) => incident.natureOfIncident === natureOfIncident
        );
      
        // Count incidents that occurred after the timestamp
        const count_of_incidents_after_timestamp = filteredIncidents.filter(
          (incident) => incident.timestamp && incident.timestamp > timestamp
        ).length;
      
        // Total count of incidents for this incident type
        const total_count_of_incidents_for_this_incidentType = filteredIncidents.length;
      
        return {
          howmanyweeks_now_since_timestamp,
          count_of_incidents_after_timestamp,
          total_count_of_incidents_for_this_incidentType,
        };
      }

    initChart() {

        this.incidentReportService.getIncidentsAPI()
          .subscribe(response => {
            this.robberyCard = this.processIncidents(response,"Robbery",new Date('2024-07-12T09:30:00Z'));
            this.shopliftingCard = this.processIncidents(response,"Shoplifting",new Date('2024-07-12T09:30:00Z'));
            this.theftUnderFiveK = this.processIncidents(response,"Theft Under $5,000",new Date('2024-07-12T09:30:00Z'));
            this.theftOverFiveK = this.processIncidents(response,"Theft Over $5,000",new Date('2024-07-12T09:30:00Z'));
          }, error => {
            console.error('Error reporting incident:', error);
            alert('Error reporting incident!');
            
          });

        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor: documentStyle.getPropertyValue('--bluegray-700'),
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: .4
                }
            ]
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
