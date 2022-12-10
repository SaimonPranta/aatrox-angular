import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexMarkers
} from "ng-apexcharts";

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   dataLabels: ApexDataLabels;
//   grid: ApexGrid;
//   stroke: ApexStroke;
//   title: ApexTitleSubtitle;
// };

@Component({
  selector: 'app-follower-growth',
  templateUrl: './follower-growth.component.html',
  styleUrls: ['./follower-growth.component.scss']
})
export class FollowerGrowthComponent {

  series: ApexAxisChartSeries = [
    {
      name: "Follower Growth",
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12]
    }
  ]
  chart: ApexChart = {
    id: "fb",
    height:300,
    type: "line",
    zoom: {
      enabled: false
    }
  }
  dataLabels: ApexDataLabels = {
    enabled: false
  }
  stroke: ApexStroke = {
    width: 4,
    curve: "smooth"
  }
  title: ApexTitleSubtitle = {
    text: "",
    align: "left"
  }
  grid: ApexGrid = {
    row: {
      colors: ["#f3f3f3", "transparent"],
      opacity: 0.5
    }
  }
  // toolbar: ApexGrid = {
  //   tools: {
  //     selection: false
  //   }
  // }
  
  xaxis: ApexXAxis = {
    categories: [
      "Feb'00",
      "Feb'00",
      "Mar'00",
      "Apr'00",
      "May'00",
      "Jun'00",
      "Jul'00",
      "Aug'00",
      "Sep"
    ]
  }
  markers: ApexMarkers = {
    size: 6,
    hover: {
      size: 10
    }
  }



}
