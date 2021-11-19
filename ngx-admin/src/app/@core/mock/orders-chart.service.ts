import { Injectable } from '@angular/core';
import { PeriodsService } from './periods.service';
import { OrdersChart, OrdersChartData } from '../data/orders-chart';

// Additional imports
import { ECommerceComponent } from '../../pages/e-commerce/e-commerce.component';
import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
  NbToastrConfig,
} from '@nebular/theme';
import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;

declare let tempCelsius: number;
declare let timeSlot: string;
declare let notification: string;

@Injectable()
export class OrdersChartService extends OrdersChartData {

  private year = [
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
  ];

  private data = { };

  constructor(private period: PeriodsService) {
    super();
    this.data = {
      '15mins': this.getDataFor15minPeriod(),
      '30mins': this.getDataFor30minPeriod(),
      '1hour': this.getDataFor1hrPeriod(),
      // 12hr: this.getDataFor12hrPeriod(),
      // 1day: this.getDataFor1dayPeriod(),
      // week: this.getDataForWeekPeriod(),
      // month: this.getDataForMonthPeriod(),
      // year: this.getDataForYearPeriod(),
    };
  }

  private getDataFor15minPeriod(): OrdersChart {
    return {
      chartLabel: this.getDataLabels(31, this.period.getQuarterHour()),
      linesData: [
        [
          64, 67, 76, 66, 89, 92,
          91, 71, 74, 73, 65, 77,
          78, 77, 78, 78, 71, 91,
          98, 95, 74, 76, 89, 72,
          86, 89, 80, 84, 86, 88, 89,
        ],
      ],
    };
  }

  private getDataFor30minPeriod(): OrdersChart {
    return {
      chartLabel: this.getDataLabels(31, this.period.getHalfHour()),
      linesData: [
        [
          68, 78, 93, 85, 82, 83,
          74, 89, 88, 83, 88, 84,
          92, 90, 89, 88, 89, 86,
          79, 85, 85, 86, 87, 86,
          84, 73, 82, 71, 73, 74, 78,
        ],
      ],
    };
  }

  private getDataFor1hrPeriod(): OrdersChart {
    return {
      chartLabel: this.getDataLabels(61, this.period.getOneHour()),
      linesData: [
        [
          90, 69, 27, 66, 89, 98,
          96, 87, 75, 79, 83, 87,
          82, 98, 86, 76, 70, 68,
          75, 78, 87, 94, 90, 94,
          88, 72, 77, 72, 88, 86,
          86, 89, 85, 84, 92, 89,
          77, 79, 70, 89, 86, 82,
          88, 88, 93, 85, 72, 73,
          74, 79, 78, 73, 78, 64,
          72, 80, 89, 88, 89, 86, 88,
        ],
      ],
    };
  }

  // private getDataFor12hrPeriod(): OrdersChart {}
  // private getDataFor1dayPeriod(): OrdersChart {}

  private getDataForWeekPeriod(): OrdersChart {
    return {
      chartLabel: this.getDataLabels(42, this.period.getWeeks()),
      linesData: [
        [
          84, 67, 26, 66, 89, 99,
          92, 71, 40, 30, 65, 27,
          91, 58, 30, 18, 95, 91, 97,
          109, 125, 44, 66, 89, 22,
          36, 59, 80, 30, 36, 29,
          38, 42, 39, 29, 32, 88,
          58, 21, 78, 28, 71,
        ],
        [
          58, 78, 93, 25, 22, 23,
          24, 19, 18, 73, 68, 64,
          62, 60, 59, 58, 59, 66,
          79, 95, 15, 36, 57, 76,
          92, 31, 34, 33, 30, 93,
          84, 73, 62, 51, 41, 34,
          32, 32, 32, 32, 32, 32,
        ],
        [
          58, 37, 22, 51, 88, 32,
          23, 24, 18, 88, 57, 22,
          87, 54, 24, 100, 81, 68, 61,
          58, 61, 69, 80, 96, 19, 37,
          61, 86, 10, 33, 54, 71,
          84, 93, 97, 97, 97, 97,
          97, 97, 97, 97, 97,
        ],
      ],
    };
  }

  private getDataForMonthPeriod(): OrdersChart {
    return {
      chartLabel: this.getDataLabels(47, this.period.getMonths()),
      linesData: [
        [
          5, 63, 17, 56, 94, 52,
          50, 70, 83, 89, 90,
          86, 77, 64, 44, 20,
          94, 71, 57, 51, 50,
          52, 55, 60, 66, 70,
          67, 53, 35, 15, 97,
          82, 71, 64, 63, 62, 61,
          62, 65, 73, 84, 102,
          27, 59, 23, 59, 33,
        ],
        [
          26, 83, 48, 20, 40,
          65, 73, 59, 21,
          22, 55, 30, 28, 36,
          50, 68, 88, 19, 29,
          46, 58, 63, 65,
          73, 87, 28, 36,
          71, 10, 46, 75,
          93, 43, 28, 87,
          68, 31, 29, 75,
          43, 20, 26, 22,
          37, 22, 47, 26, 48,
        ],
        [
          98, 48, 15, 92, 74,
          61, 51, 43, 37, 31,
          22, 19, 92, 72, 52,
          32, 16, 12, 90, 80, 71,
          64, 58, 53, 49, 48, 54, 66,
          84, 14, 25, 42, 56, 66,
          72, 74, 72, 67, 59, 49,
          36, 21, 15, 86, 67, 45, 22,
        ],
      ],
    };
  }

  private getDataForYearPeriod(): OrdersChart {
    return {
      chartLabel: this.getDataLabels(42, this.year),
      linesData: [
        [
          90, 69, 27, 66, 89, 98,
          96, 87, 75, 59, 43, 27,
          12, 98, 86, 76, 70, 68,
          65, 58, 47, 34, 20, 34,
          88, 72, 57, 42, 28, 16,
          16, 99, 95, 94, 92, 89, 84,
          77, 69, 60, 49, 36, 22,
        ],
        [
          65, 67, 37, 59, 75, 86,
          93, 97, 99, 97, 90, 79,
          65, 47, 26, 35, 82, 61,
          41, 23, 28, 97, 90, 87,
          85, 81, 72, 60, 45, 26,
          15, 82, 60, 40, 26, 19, 22,
          43, 82, 41, 20, 21,
        ],
        [
          19, 65, 36, 58, 44, 36,
          86, 89, 29, 39, 73, 67,
          39, 65, 85, 96, 98, 85,
          51, 30, 55, 21, 97, 81,
          70, 64, 62, 61, 59, 54,
          46, 35, 22, 38, 96, 87,
          83, 82, 82, 82, 82, 82, 82,
        ],
      ],
    };
  }

  getDataLabels(nPoints: number, labelsArray: string[]): string[] {
    const labelsArrayLength = labelsArray.length;
    const step = Math.round(nPoints / labelsArrayLength);

    return Array.from(Array(nPoints)).map((item, index) => {
      const dataIndex = Math.round(index / step);

      return index % step === 0 ? labelsArray[dataIndex] : '';
    });
  }

  getOrdersChartData(period: string): OrdersChart {
    let log = console.log;
    let error = console.error;
    let warn = console.warn;
    let info = console.info;

    let tempData = [];
    let timeData = [];

    const systemUUID = '145e45020341';
    const zoneName = 'TestZone';
    const url = '/Bmp/V1/System/'+systemUUID+'/Thermal/'+zoneName+'?';
    const currentDate = new Date();
    const currentTimeLocalString = currentDate.toLocaleString('en-GB',{timeZone: 'UTC'});
    const date = currentTimeLocalString.split(', ', 2);
    const set1 = date[0];
    const set2 = date[1];
    const currentTime = set1 +' '+ set2;

    function getRequest(url, params) {
      $.ajax({
        async: false,
        method: 'GET',
        url: url,
        data: params,
        contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
        cache: false,
        success: function(data) {
          // Temperature
          tempData = parseTempData(data);
          // Time
          timeData = parseTimeData(data);
        },
        error: function(jqxhr) {
          let errorMsg = '';
          if (jqxhr.status === 0) {
            errorMsg = 'Not connected.\n Verify Network.';
          } else if (jqxhr.status === 401) {
            errorMsg = 'Forbidden Error [401]';
          } else if (jqxhr.status === 404) {
            errorMsg = 'Requested URI Not Found [404]';
          } else if (jqxhr.status === 429) {
            errorMsg = 'Too Many Requests [429]';
          } else if (jqxhr.status === 500) {
            errorMsg = 'Internal Server Error [500]';
          } else if (jqxhr.status === 504) {
            errorMsg = 'Gateway Timeout Error [504]';
          } else {
            errorMsg = 'Uncaught Error.\n' + jqxhr.responseText;
          }
          // warn(errorMsg);
          error(errorMsg);
        },
      });
    }

    if (period === '15mins') {
      const timePeriod: number = 15;
      const filterPastTime = new Date(currentDate.getTime() - timePeriod * 60000).toLocaleString('en-GB', {timeZone: 'UTC'}).split(', ', 2);
      const splitSet1 = filterPastTime[0];
      const splitSet2 = filterPastTime[1];
      // const pastTime = splitSet1 + ' ' + splitSet2;
      // Define 15mins time statically for testing
      let pastTime = '24/10/2021T12:00:00';
      let currentTime = '24/10/2021T12:15:00';
      const params = {
        // 'SystemUUID': systemUUID,
        'StartTime': pastTime,
        'EndTime': currentTime,
        'SteppingInterval': 5,
        // 'SteppingIntervalUnit': 'seconds',
      };
      getRequest(url, params);
    } else if (period === '30mins') {
      const timePeriod: number = 30;
      const filterPastTime = new Date(currentDate.getTime() - timePeriod * 60000).toLocaleString('en-GB', {timeZone: 'UTC'}).split(', ', 2);
      const splitSet1 = filterPastTime[0];
      const splitSet2 = filterPastTime[1];
      const pastTime = splitSet1 + ' ' + splitSet2;
      // Define 30mins time statically for testing
      // let pastTime = '19/10/2021 09:00:00';
      // let currentTime = '19/10/2021 09:30:30';
      const params = {
        // 'SystemUUID': systemUUID,
        'StartTime': pastTime,
        'EndTime': currentTime,
        'SteppingInterval': 30,
        // 'SteppingIntervalUnit': 'seconds',
      };
      getRequest(url, params);
    }  else if (period === '1hour') {
      const timePeriod: number = 60;
      const filterPastTime = new Date(currentDate.getTime() - timePeriod * 60000).toLocaleString('en-GB', {timeZone: 'UTC'}).split(', ', 2);
      const splitSet1 = filterPastTime[0];
      const splitSet2 = filterPastTime[1];
      const pastTime = splitSet1 + ' ' + splitSet2;
      // Define 1hour time statically for testing
      // let pastTime = '19/10/2021 09:00:00';
      // let currentTime = '19/10/2021 10:01:00';
      const params = {
        // 'SystemUUID': systemUUID,
        'StartTime': pastTime,
        'EndTime': currentTime,
        'SteppingInterval': 60,
        // 'SteppingIntervalUnit': 'seconds',
      };
      getRequest(url, params);
    }  else if (period === '12hours') {
      const timePeriod: number = 720;
      const filterPastTime = new Date(currentDate.getTime() - timePeriod * 60000).toLocaleString('en-GB', {timeZone: 'UTC'}).split(', ', 2);
      const splitSet1 = filterPastTime[0];
      const splitSet2 = filterPastTime[1];
      const pastTime = splitSet1 + ' ' + splitSet2;
      const params = {
        // 'SystemUUID': systemUUID,
        'StartTime': pastTime,
        'EndTime': currentTime,
        'SteppingInterval': 120,
        // 'SteppingIntervalUnit': 'seconds',
      };
      getRequest(url, params);
    }  else if (period === 'Day') {
      const timePeriod: number = 1440;
      const filterPastTime = new Date(currentDate.getTime() - timePeriod * 60000).toLocaleString('en-GB', {timeZone: 'UTC'}).split(', ', 2);
      const splitSet1 = filterPastTime[0];
      const splitSet2 = filterPastTime[1];
      const pastTime = splitSet1 + ' ' + splitSet2;
      const params = {
        // 'SystemUUID': systemUUID,
        'StartTime': pastTime,
        'EndTime': currentTime,
        'SteppingInterval': 240,
        // 'SteppingIntervalUnit': 'seconds',
      };
      getRequest(url, params);
    }  else if (period === 'Week') {
      const timePeriod: number = 10080;
      const filterPastTime = new Date(currentDate.getTime() - timePeriod * 60000).toLocaleString('en-GB', {timeZone: 'UTC'}).split(', ', 2);
      const splitSet1 = filterPastTime[0];
      const splitSet2 = filterPastTime[1];
      const pastTime = splitSet1 + ' ' + splitSet2;
      const params = {
        // 'SystemUUID': systemUUID,
        'StartTime': pastTime,
        'EndTime': currentTime,
        'SteppingInterval': 500,
        // 'SteppingIntervalUnit': 'seconds',
      };
      getRequest(url, params);
    }  else if (period === 'Month') {
      const timePeriod: number = 40320;
      const filterPastTime = new Date(currentDate.getTime() - timePeriod * 60000).toLocaleString('en-GB', {timeZone: 'UTC'}).split(', ', 2);
      const splitSet1 = filterPastTime[0];
      const splitSet2 = filterPastTime[1];
      const pastTime = splitSet1 + ' ' + splitSet2;
      const params = {
        // 'SystemUUID': systemUUID,
        'StartTime': pastTime,
        'EndTime': currentTime,
        'SteppingInterval': 960,
        // 'SteppingIntervalUnit': 'seconds',
      };
      getRequest(url, params);
    }  else if (period === 'Year') {
      const timePeriod: number = 525600;
      const filterPastTime = new Date(currentDate.getTime() - timePeriod * 60000).toLocaleString('en-GB', {timeZone: 'UTC'}).split(', ', 2);
      const splitSet1 = filterPastTime[0];
      const splitSet2 = filterPastTime[1];
      const pastTime = splitSet1 + ' ' + splitSet2;
      const params = {
        // 'SystemUUID': systemUUID,
        'StartTime': pastTime,
        'EndTime': currentTime,
        'SteppingInterval': 1920,
        // 'SteppingIntervalUnit': 'seconds',
      };
      getRequest(url, params);
    }

    function parseTempData(data) {
      const tempCelsius: any[] = data.TempCelsius;
      let x = 0;
      const len = tempCelsius.length;
      while (x < len) {
        tempCelsius[x] = Math.round(tempCelsius[x].toFixed(2));
          x++;
      }
      // log('Period ['+period+'] Temperature Data:', tempCelsius);
      return tempCelsius;
    }

    function parseTimeData(data) {
      const timeSlot: string[] = data.TimeSlot;
      let x = 0;
      const len = timeSlot.length;

      // Handle with Date stamps
      if ((period === 'Week') || (period === 'Month') || (period === 'Year')) {
        const timeSlot: string[] = data.TimeSlot;
        let y = 0;
        const size = timeSlot.length;
        while (y < size) {
          timeSlot[y] = timeSlot[y].split(' ', 1)[0];
          y++;
        }
        // log('Period ['+period+'] Time Data:', timeSlot);
        return timeSlot;
      } else {
        // Handle with Time stamps
        while (x < len) {
          timeSlot[x] = timeSlot[x].split(' ', 2)[1].split('.', 2)[0];
            x++;
        }
        if ((timeSlot.length === 0) || (timeSlot === null) || (timeSlot === undefined)) {
          handleUndefinedData(timeSlot);
        } else {
          handlePopulatedData(timeSlot);
        }
        // log('Period ['+period+'] Time Data:', timeSlot);  
        return timeSlot;
      }
    }

    function handlePopulatedData(timeSlot) {
      const errorMsg = '200 Success';
      // Display a success notification
      log(errorMsg, timeSlot);
      return errorMsg;
    }

    function handleUndefinedData(timeSlot) {
      const errorMsg = '404 Not Found - Indicates that the server has received and processed the request, but no response is available.';
      // Display an error notification
      error(errorMsg, timeSlot);
      return errorMsg;
    }

    // log('Temp Data:', tempData);
    // log('Time Data:', timeData);
    // log('Dropdown selection - [GET] Period:', period, this.data[period]);

    return this.data[period] = {
      chartLabel: timeData, timeData,
      linesData: [
        tempData,
        [
          68, 78, 93, 85, 82, 83,
          74, 89, 88, 83, 88, 84,
          92, 90, 89, 88, 89, 86,
          79, 85, 85, 86, 87, 86,
          84, 73, 82, 71, 73, 74, 78,
          83, 82, 82, 82, 82, 82, 82,
          68, 78, 93, 85, 82, 83,
          74, 89, 88, 83, 88, 84,
          92, 90, 89, 88, 89, 86,
          79, 85, 85, 86, 87, 86,
          39, 65, 85, 96, 98, 85,
          51, 30, 55, 21, 97, 81,
          70, 64, 62, 61, 59, 54,
          46, 35, 22, 38, 96, 87,
          83, 82, 82, 82, 82, 82, 82,
          19, 65, 36, 58, 44, 36,
          86, 89, 29, 39, 73, 67,
          39, 65, 85, 96, 98, 85,
          51, 30, 55, 21, 97, 81,
          70, 64, 62, 61, 59, 54,
          46, 35, 22, 38, 96, 87,
          70, 64, 62, 61, 59, 54,
          68, 78, 93, 85, 82, 83,
          74, 89, 88, 83, 88, 84,
          92, 90, 89, 88, 89, 86,
          79, 85, 85, 86, 87, 86,
          68, 78, 93, 85, 82, 83,
          74, 89, 88, 83, 88, 84,
        ],
        [
          19, 65, 36, 58, 44, 36,
          86, 89, 29, 39, 73, 67,
          39, 65, 85, 96, 98, 85,
          51, 30, 55, 21, 97, 81,
          70, 64, 62, 61, 59, 54,
          46, 35, 22, 38, 96, 87,
          83, 82, 82, 82, 82, 82, 82,
          19, 65, 36, 58, 44, 36,
          86, 89, 29, 39, 73, 67,
          39, 65, 85, 96, 98, 85,
          51, 30, 55, 21, 97, 81,
          70, 64, 62, 61, 59, 54,
          46, 35, 22, 38, 96, 87,
          70, 64, 62, 61, 59, 54,
          46, 35, 22, 38, 96, 87,
          83, 82, 82, 82, 82, 82, 82,
          19, 65, 36, 58, 44, 36,
          86, 89, 29, 39, 73, 67,
          68, 78, 93, 85, 82, 83,
          74, 89, 88, 83, 88, 84,
          92, 90, 89, 88, 89, 86,
          79, 85, 85, 86, 87, 86,
          84, 73, 82, 71, 73, 74, 78,
          83, 82, 82, 82, 82, 82, 82,
          68, 78, 93, 85, 82, 83,
          68, 78, 93, 85, 82, 83,
          74, 89, 88, 83, 88, 84,
          92, 90, 89, 88, 89, 86,
          79, 85, 85, 86, 87, 86,
          68, 78, 93, 85, 82, 83,
          74, 89, 88, 83, 88, 84,
        ],
        [
          98, 48, 15, 92, 74,
          61, 51, 43, 37, 31,
          22, 19, 92, 72, 52,
          32, 16, 12, 90, 80, 71,
          64, 58, 53, 49, 48, 54, 66,
          84, 14, 25, 42, 56, 66,
          72, 74, 72, 67, 59, 49,
          51, 30, 55, 21, 97, 81,
          70, 64, 62, 61, 59, 54,
          46, 35, 22, 38, 96, 87,
          83, 82, 82, 82, 82, 82, 82,
          19, 65, 36, 58, 44, 36,
          86, 89, 29, 39, 73, 67,
          68, 78, 93, 85, 82, 83,
          74, 89, 88, 83, 88, 84,
          92, 90, 89, 88, 89, 86,
          79, 85, 85, 86, 87, 86,
          84, 73, 82, 71, 73, 74, 78,
          83, 82, 82, 82, 82, 82, 82,
          68, 78, 93, 85, 82, 83,
          74, 89, 88, 83, 88, 84,
          92, 90, 89, 88, 89, 86,
          79, 85, 85, 86, 87, 86,
          68, 78, 93, 85, 82, 83,
          74, 89, 88, 83, 88, 84,
          92, 90, 89, 88, 89, 86,
          79, 85, 85, 86, 87, 86,
          68, 78, 93, 85, 82, 83,
          79, 85, 85, 86, 87, 86,
          68, 78, 93, 85, 82, 83,
          74, 89, 88, 83, 88, 84,
          92, 90, 89, 88, 89, 86,
          79, 85, 85, 86, 87, 86,
        ],
      ],
    };

  }

}

