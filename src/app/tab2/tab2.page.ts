import {Component, OnInit} from '@angular/core';
import {MapService} from '../services/map.service';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  zoom = 17;
  constructor(public service: MapService, public androidPermissions: AndroidPermissions) {}
  ngOnInit() {
  }
}
