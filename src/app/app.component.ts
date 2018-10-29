import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public myValue: string;

    public constructor() {

        setInterval(() => {

            this.myValue = new Date().toISOString();

        }, 1000);

    }

    public myOutputEvent(data: any): void {

        console.log('button clicked, fired from eventemitter');

    }


}
