import { Component } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexMarkers
} from "ng-apexcharts";

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   stroke: ApexStroke;
//   tooltip: ApexTooltip;
//   dataLabels: ApexDataLabels;
// };

@Component({
  selector: 'app-reach-impression',
  templateUrl: './reach-impression.component.html',
  styleUrls: ['./reach-impression.component.scss']
})
export class ReachImpressionComponent {

  series: ApexAxisChartSeries = [
    {
      name: "series1",
      data: [80, 12, 75, 45, 84, 15, 74]
    },
    {
      name: "series2",
      data: [10, 80, 15, 71, 18, 80, 100]
    }
  ]
  chart: ApexChart = {
    height: 350,
    type: "area",
    zoom: {
      enabled: false
    }
  }
  dataLabels: ApexDataLabels = {
    enabled: false
  }
  stroke: ApexStroke = {
    width: [0, 0],
    curve: "smooth"
  }
  xaxis: ApexXAxis = {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z"
    ]
  }
  tooltip: ApexTooltip = {
    x: {
      format: "dd/MM/yy HH:mm"
    }
  }
  markers: ApexMarkers = {
    size: 6,
    hover: {
      size: 10
    }
  }

}
