import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';



@Component({
    selector: 'lib-SSLsplit',
    templateUrl: './SSLsplit.component.html',
    styleUrls: ['./SSLsplit.component.css']
})
export class SSLsplitComponent implements OnInit {
    constructor(private API: ApiService) { }

	userInput = "";
	apiResponse = "Press button above to get the response.";

	doAPIAction(): void {
		this.API.request({
			module: "SSLsplit",
			action: "hello_world",
			user_input: this.userInput
		}, (response) => {
			this.apiResponse = response;
			
			})
	}

    ngOnInit(): void {
    }
}
