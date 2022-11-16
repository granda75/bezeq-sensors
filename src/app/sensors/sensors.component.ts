import { Component, OnInit } from '@angular/core';
import sensorsData from './sensors.json'
import { SensorsList } from './sensors-list';
import { ISensor } from './ISensor';



@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit {
  sensorsList: SensorsList = sensorsData;
  sensors: ISensor[];
  workedSensors: number;
  notWorkedSensors: number;

  constructor() {
    this.sensors = this.sensorsList.components;

    this.workedSensors = this.sensors.filter((obj) => {
      return obj.ComponentOk === 1;
    }).length;

    this.notWorkedSensors = this.sensors.filter((obj) => {
      return obj.ComponentOk === 0;
    }).length;

  }

  ngOnInit(): void {
  }

  changeComponentStatus(item: ISensor) {
    if (item.ComponentOk === 1)
      item.ComponentOk = 0;
    else
      item.ComponentOk = 1;
  }
}
