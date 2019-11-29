import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import {AgmCoreModule, GoogleMapsAPIWrapper, PolylineManager} from '@agm/core';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: Tab2Page}]),
        AgmCoreModule,
    ],
  declarations: [Tab2Page],
    providers: [PolylineManager, GoogleMapsAPIWrapper]
})
export class Tab2PageModule {}
