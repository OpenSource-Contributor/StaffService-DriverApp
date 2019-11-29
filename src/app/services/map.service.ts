import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  currentLocation = [];
  constructor() { }
  setCurrentLocation(location) {
    if (this.currentLocation.length <= 20) {
      this.currentLocation.push(location);
    } else {
      this.currentLocation.reverse();
      this.currentLocation.pop();
      this.currentLocation.reverse();
      this.currentLocation.push();
    }
  }
  get _currentLocation() {
    return this.currentLocation;
  }
}
