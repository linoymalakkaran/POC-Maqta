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
import { UiKitModule } from 'app/main/ui-kit/ui-kit.module';
import { SharedModule } from './shared/shared.module';
const appRoutes: Routes = [
    { path: '', redirectTo: '/complementary', pathMatch: 'full' },
    {
        path: 'complementary',
        loadChildren: () => import('./main/complementary/complementary.module').then(m => m.ComplementaryModule)
    },
    {
        path: 'appointments',
        loadChildren: () => import('./main/appointments/appointments.module').then(m => m.AppointmentsModule)
    },
    {
        path: 'vessel',
        loadChildren: () => import('./main/vessel/vessel.module').then(m => m.VesselModule)
    },
    {
        path: 'payment',
        loadChildren: () => import('./main/payment/payment.module').then(m => m.PaymentModule)
    },
    {
        path: 'airway',
        loadChildren: () => import('./main/airway/airway.module').then(m => m.AirwayModule)
    },
    {
        path: 'awb',
        loadChildren: () => import('./main/awb/awb.module').then(m => m.AwbModule)
    },
    {
        path: 'ui-kit',
        loadChildren: () => import('./main/ui-kit/ui-kit.module').then(m => m.UiKitModule)
    },
    {
        path: 'track-cargo',
        loadChildren: () => import('./main/track-cargo/track-cargo.module').then(m => m.TrackCargoModule)
    },
    {
        path: 'schedule',
        loadChildren: () => import('./main/schedule/schedule.module').then(m => m.ScheduleModule)
    },
    {
        path: 'truck-tracking',
        loadChildren: () => import('./main/truck-trace/truck-trace.module').then(m => m.TruckTraceModule)
    },
    {
        path: 'heavy-container',
        loadChildren: () => import('./main/heavy-duty-container/heavy-duty-container.module').then(m => m.HeavyDutyContainerModule)
    },
    {
        path: 'information-services',
        loadChildren: () => import('./main/information-services/information-services.module').then(m => m.InformationServicesModule)
    },
    {
        path: 'voyages',
        loadChildren: () => import('./main/voyages/voyages.module').then(m => m.VoyagesModule)
    },
    {
        path: 'voyages-page',
        loadChildren: () => import('./main/voyage-page/voyage-page.module').then(m => m.VoyagePageModule)
    }
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
        // Material moment date module
        MatMomentDateModule,
        // Material
        // MatButtonModule,
        // MatIconModule,
        // Atlp modules
        AtlpModule.forRoot(atlpConfig),
        AtlpProgressBarModule,
        AtlpSharedModule,
        AtlpSidebarModule,
        // App modules
        LayoutModule,
        UiKitModule,
        //Shared modules
        SharedModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}