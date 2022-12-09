import { Component } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ApexPlotOptions
} from "ng-apexcharts";

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   dataLabels: ApexDataLabels;
//   title: ApexTitleSubtitle;
//   colors: any;
// };


@Component({
  selector: 'app-posting-habits',
  templateUrl: './posting-habits.component.html',
  styleUrls: ['./posting-habits.component.scss']
})
export class PostingHabitsComponent {

  generateData = (count: number, yrange: any) => {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "w" + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

  series: ApexAxisChartSeries = [
    {
      name: "Sun",
      data: this.generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Sat",
      data: this.generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Fri",
      data: this.generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Thu",
      data: this.generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Wed",
      data: this.generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Tue",
      data: this.generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Mon",
      data: this.generateData(18, {
        min: 0,
        max: 90
      })
    }
  ]
  chart: ApexChart = {
    height: 350,
    type: "heatmap"
  }
  dataLabels: ApexDataLabels = {
    enabled: false
  }
  colors: any = ["#008FFB"]
  title: ApexTitleSubtitle = {
    text: "HeatMap Chart (Single color)"
  }
  plotOptions: ApexPlotOptions = {
    heatmap: {
      radius: 300,
      enableShades: false,
      colorScale: {
        ranges: [
          {
            from: 0,
            to: 50,
            color: "#008FFB"
          },
          {
            from: 51,
            to: 100,
            color: "#00E396"
          }
        ]
      }
    }
  }


}
