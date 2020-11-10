import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'lib-speedtest',
    templateUrl: './speedtest.component.html',
    styleUrls: ['./speedtest.component.css']
})
export class speedtestComponent implements OnInit {
    constructor(private API: ApiService) { }

    ngOnInit() {
    }
}
