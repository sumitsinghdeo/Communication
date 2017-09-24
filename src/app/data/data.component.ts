import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  constructor() { }

  @Input() employeeName:string;
  @Input() employeeCity:string;
  @Input() employeeSalary:number;
  @Output() sendRecord: EventEmitter<any>=new EventEmitter();



  public selectRecord(){
    let selectedEmployeeDataobj: any={
      selectedName:this.employeeName,
      selectedCity:this.employeeCity,
      selectedSalary:this.employeeSalary
      
    };
    this.sendRecord.emit(selectedEmployeeDataobj);
  }

  ngOnInit() {
  }

}
