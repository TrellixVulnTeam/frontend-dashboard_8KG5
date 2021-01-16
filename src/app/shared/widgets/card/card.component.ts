import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  Highcharts=Highcharts;
  chartOptions={}
  constructor() { }

  ngOnInit(): void {
    this.chartOptions={
      chart: {
          type: 'area',
          backgroundColor:null,
          borderWidth:0,
          margin:[2,2,2,2],
          height:60
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      
      tooltip: {
          split: true,
          outside:true
      },
      xAxis:{
        labels:{
          enabled:false
        },
        title:{
          text:null
        },
        startOnTick:false,
        endOnTick:false,
        tickOptions:[]
      },
      yAxis:{
        labels:{
          enabled:false
        },
        title:{
          text:null
        },
        startOnTick:false,
        endOnTick:false,
        tickOptions:[]
      },
      legend:{
        enabled:false
      },
      credits:{
        enabled:false
      },
       exporting:{
          enabled:false
       },
      series: [{
        data:[10,19,70,30,50]
      }]
  };
  HC_exporting(Highcharts);
  setTimeout(()=>
  {
    window.dispatchEvent(
      new Event("resize")
    );
  },300)
  }

}
