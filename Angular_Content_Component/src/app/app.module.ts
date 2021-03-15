import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import { AtlpModule } from '@atlp/atlp.module';
import { AtlpSharedModule } from '@atlp/shared.module';
import { AtlpProgressBarModule, AtlpSidebarModule } from '@atlp/components';
import { atlpConfig } from 'app/atlp-config';
import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
 
import { SharedModule } from './shared/shared.module';
const appRoutes: Routes = [
    { path: '', redirectTo: '/appointments', pathMatch: 'full' }, 
    {
        path: 'appointments',
        loadChildren: () => import('./main/appointments/appointments.module').then(m => m.AppointmentsModule)
    },
     
];
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
        TranslateModule.forRoot(),       
        MatMomentDateModule,        
        AtlpModule.forRoot(atlpConfig),
        AtlpProgressBarModule,
        AtlpSharedModule,
        AtlpSidebarModule,        
        LayoutModule,
        SharedModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}