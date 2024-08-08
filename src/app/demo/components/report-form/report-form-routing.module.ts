import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReportFormComponent } from './report-form.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ReportFormComponent }
    ])],
    exports: [RouterModule]
})
export class ReportFormRoutingModule { }
