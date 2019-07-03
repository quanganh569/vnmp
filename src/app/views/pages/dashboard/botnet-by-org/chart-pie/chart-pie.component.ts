import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'kt-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss']
})


export class ChartPieComponent implements OnInit, OnDestroy {

  private chart: am4charts.PieChart3D;
  constructor(private zone: NgZone) { }

  ngOnInit() {

  }
  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {

    this.zone.runOutsideAngular(() => {
      let chart = am4core.create('chartdiv', am4charts.PieChart3D);

      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.legend = new am4charts.Legend();

chart.data = [
  {
    country: 'Wannacry',
    litres: 6
  },
  {
    country: 'Azorult',
    litres: 1
  },
  {
    country: 'Unknown',
    litres: 1
  },
  {
    country: 'Other',
    litres: 1
  },
  {
    country: 'Conficker',
    litres: 3
  },
  {
    country: 'Avalanche',
    litres: 7
  }
];

let series = chart.series.push(new am4charts.PieSeries3D());
series.dataFields.value = 'litres';
series.dataFields.category = 'country';

      this.chart = chart;
    });

  }

}
