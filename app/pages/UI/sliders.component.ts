import {Component,ElementRef, OnInit} from 'angular2/core';

declare var System;
declare var $;

@Component({
    selector: 'pages-ui-sliders',
    templateUrl: 'app/pages/UI/sliders.component.html'
})
export class SlidersComponent implements OnInit {
  elementRef: ElementRef;
  e$: any;

  constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

  initSliders (element) {
    /* BOOTSTRAP SLIDER */
    element.find('.slider').bootstrapSlider();
    /* ION SLIDER */
    element.find("#range_1").ionRangeSlider({
      min: 0,
      max: 5000,
      from: 1000,
      to: 4000,
      type: 'double',
      step: 1,
      prefix: "$",
      prettify: false,
      hasGrid: true
    });
    element.find("#range_2").ionRangeSlider();

    element.find("#range_5").ionRangeSlider({
      min: 0,
      max: 10,
      type: 'single',
      step: 0.1,
      postfix: " mm",
      prettify: false,
      hasGrid: true
    });
    element.find("#range_6").ionRangeSlider({
      min: -50,
      max: 50,
      from: 0,
      type: 'single',
      step: 1,
      postfix: "°",
      prettify: false,
      hasGrid: true
    });

    element.find("#range_4").ionRangeSlider({
      type: "single",
      step: 100,
      postfix: " light years",
      from: 55000,
      hideMinMax: true,
      hideFromTo: false
    });
    element.find("#range_3").ionRangeSlider({
      type: "double",
      postfix: " miles",
      step: 10000,
      from: 25000000,
      to: 35000000,
      onChange: function (obj) {
        var t = "";
        for (var prop in obj) {
          t += prop + ": " + obj[prop] + "\r\n";
        }
        element.find("#result").html(t);
      },
      onLoad: function (obj) {
        //
      }
    });
  };


  ngOnInit() {

    //<!-- Ion Slider -->
    System.import('plugins/ionslider/ion.rangeSlider.min');
    //<!-- Bootstrap slider -->
    System.import('plugins/bootstrap-slider/bootstrap-slider');

    setTimeout(() => this.initSliders($(this.elementRef.nativeElement)),100);

  }
}
