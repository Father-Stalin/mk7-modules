import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from './helpers/error-dialog/error-dialog.component';
import { ControlState } from '../interfaces/controlstate.interface';

@Component({
    selector: 'lib-speedtest',
    templateUrl: './speedtest.component.html',
    styleUrls: ['./speedtest.component.css']
})
// tslint:disable-next-line:class-name
export class speedtestComponent implements OnInit {
    constructor(private API: ApiService, private dialog: MatDialog) { }
    public controlState: ControlState = { isBusy: false, running: false};
    internetSpeed = '--MB downloaded @ --.--MB/s';

    private handleError(msg: string): void {
        this.dialog.closeAll();
        this.dialog.open(ErrorDialogComponent, {
            hasBackdrop: true,
            width: '500px',
            data: {
                message: msg
            }
        });
    }
    checkDependencies(): void {
        this.API.request({
            module: 'speedtest',
            action: 'check_dependencies'
        }, (response) => {
            if (response.error !== undefined){
                this.handleError(response.error)
                return;
            }
        })
    }
    runSpeedTest(): void {
        this.API.request({
            module: 'speedtest',
            action: 'run_test'
        }, (response) => {
            this.internetSpeed = response;
        })
    }
    ngOnInit() {
    }
}
