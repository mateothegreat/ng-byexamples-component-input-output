import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-test-output',
    templateUrl: './test-output.component.html',
    styleUrls: ['./test-output.component.scss']
})
export class TestOutputComponent implements OnInit {

    @Output() public myOutput = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    public buttonClick(): void {

        this.myOutput.emit('helloworld');

    }

}
