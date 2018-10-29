import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-test-input',
    templateUrl: './test-input.component.html',
    styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent implements OnInit {

    @Input() public myInputVariable: string;

    public constructor() {
    }

    public ngOnInit() {
    }

}
