import { Component } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   stroke: ApexStroke;
//   dataLabels: ApexDataLabels;
//   markers: ApexMarkers;
//   tooltip: any; // ApexTooltip;
//   yaxis: ApexYAxis;
//   grid: ApexGrid;
//   legend: ApexLegend;
//   title: ApexTitleSubtitle;
// };


@Component({
  selector: 'app-like-history',
  templateUrl: './like-history.component.html',
  styleUrls: ['./like-history.component.scss']
})
export class LikeHistoryComponent {
  series: ApexAxisChartSeries = [
    {
      name: "Like",
      data: [120, 120, 100, 100, 30, 90, 135, 70, 95]
    },
    {
      name: "Avg Like per day",
      data: [120, 90, 130, 145, 45, 60, 95, 90, 145]
    }
  ]
  chart: ApexChart = {
    height: 300,
    type: "line",
    zoom: {
      enabled: false
    }
  }
  dataLabels: ApexDataLabels = {
    enabled: false
  }
  stroke: ApexStroke = {
    width: [3, 5],
    curve: "straight"
    // dashArray: [0, 8, 5]
  }
  
  title: ApexTitleSubtitle = {
    text: "",
    align: "left"
  }
  legend: ApexLegend = {
    tooltipHoverFormatter: function (val, opts) {
      return (
        val +
        " - <strong>" +
        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
        "</strong>"
      );
    }
  }
  markers: ApexMarkers = {
    size: [0, 6],
    hover: {
      sizeOffset: 6,
      size: 10
    }
  }
  xaxis: ApexXAxis = {
    labels: {
      trim: false
    },
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]
  }
  // tooltip: ApexTooltip = {
  //   y: [
  //     {
  //       title: {
  //         formatter: "ehllo"
  //         }
  //     },
  //     {
  //       title: {
  //         formatter: "sfls"
  //         }
  //     },
  //     {
  //       title: {
  //         formatter: "slf"
  //         }
  //     }
  //   ]
  // }
  grid: ApexGrid = {
    borderColor: "#f1f1f1"
  }
}



