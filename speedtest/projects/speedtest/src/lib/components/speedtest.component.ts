import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'lib-speedtest',
    templateUrl: './speedtest.component.html',
    styleUrls: ['./speedtest.component.css']
})
// tslint:disable-next-line:class-name
export class speedtestComponent implements OnInit {
    constructor(private API: ApiService) { }
    userInput = '';
    apiResponse = 'N/A';
    runSpeedTest(): void {
        this.API.request({
            module: 'speedtest',
            action: 'run_test'
        }, (response) => {
            this.apiResponse = response;
        })
    }


    ngOnInit() {
    }
}
