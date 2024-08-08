import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { IncidentReportService } from '../../service/incident-report.service';
import { InputTextModule } from 'primeng/inputtext';
import { Product } from 'src/app/demo/api/product';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ProductService } from 'src/app/demo/service/product.service';
import {IncidentData} from 'src/app/demo/api/incident';



@Component({
    templateUrl: './report-form.component.html',
    providers: [MessageService],
    styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit, OnDestroy {
    // incidentData: IncidentData = {
    //     incidentId: 1,
    //     natureOfIncident: 'Robbery',
    //     numberOfRobbers: 2,
    //     itemsRobbed: 'Cash and Jewelry',
    //     injuryOccured: true,
    //     propertyDamage: true,
    //     email:'asadahmed1362@hotmail.com',
    //     status: 'Reported'
    // };

    incidentDialog: boolean = false
    productDialog: boolean = false;

    deleteProductDialog: boolean = false;
    deleteProductsDialog: boolean = false;

    incidents : IncidentData[] = [];
    products: Product[] = [];

    incident:IncidentData = {};
    product: Product = {};

    selectedProducts: Product[] = [];
    selectedIncidents: IncidentData[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    items!: MenuItem[];

    subscription!: Subscription;

    constructor(private incidentReportService: IncidentReportService, public layoutService: LayoutService,
        private productService: ProductService, private messageService: MessageService
    ) {
        this.subscription = this.layoutService.configUpdate$.subscribe(() => {
            
        });
    }

    ngOnInit() {
        //this.productService.getProducts().then(data => this.products = data);
        this.incidents =  this.incidentReportService.getIncidents();

        this.cols = [
            { field: 'incident', header: 'Incident' },
            { field: 'incidentId', header: 'Incident Id' },
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
        // this.product = {};
        // this.submitted = false;
        // this.productDialog = true;
        this.incidentDialog = true;
        this.incident = {};
        this.submitted = false;
    }

    deleteSelectedProducts() {
        // this.deleteProductsDialog = true;
    }

    editProduct(product: Product) {
        // this.product = { ...product };
        // this.productDialog = true;
    }

    deleteProduct(product: Product) {
        // this.deleteProductDialog = true;
        // this.product = { ...product };
    }

    confirmDeleteSelected() {
        this.deleteProductsDialog = false;
        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
        this.selectedProducts = [];
    }

    confirmDelete() {
        // this.deleteProductDialog = false;
        // this.products = this.products.filter(val => val.id !== this.product.id);
        // this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
        // this.product = {};
    }

    hideDialog() {
        // this.productDialog = false;
        // this.submitted = false;
        this.incidentDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.product.name?.trim()) {
            if (this.product.id) {
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
                this.products[this.findIndexById(this.product.id)] = this.product;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                this.product.id = this.createId();
                this.product.code = this.createId();
                this.product.image = 'product-placeholder.svg';
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
                this.products.push(this.product);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            this.products = [...this.products];
            this.productDialog = false;
            this.product = {};
        }
    }

    saveIncident() {
        this.submitted = true;
        this.incident.status = "Reported";
        this.incident.email = "asadahmed1362@hotmail.com";
        this.incidentReportService.reportIncident(this.incident)
          .subscribe(response => {
            console.log('Incident reported:', response);
            alert('Incident reported successfully!');
            this.incidents.push(this.incident);
            this.incidentDialog = false;
            this.incident = {};
          }, error => {
            console.error('Error reporting incident:', error);
            alert('Error reporting incident!');
            this.submitted = false;
          });
    
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    onSubmit() {
        // this.incidentReportService.reportIncident(this.incidentData)
        //   .subscribe(response => {
        //     console.log('Incident reported:', response);
        //     alert('Incident reported successfully!');
        //   }, error => {
        //     console.error('Error reporting incident:', error);
        //     alert('Error reporting incident!');
        //   });
      }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
