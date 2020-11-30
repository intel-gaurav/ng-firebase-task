import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { CrudService } from '../shared/services/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'List Of Cars Available';
  cars: any;
  date: any;
  studentName: string;
  studentAge: number;
  studentAddress: string;

  constructor(
    private crudService: CrudService,
    public router: Router, 
    ) { }

  ngOnInit(): void {
    this.crudService.read_Car().subscribe(data => {
      this.cars = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Make: e.payload.doc.data()['Make'],
          Max_speed: e.payload.doc.data()['Max_speed'],
          Engine_size: e.payload.doc.data()['Engine_size'],
          Created_date: e.payload.doc.data()['Created_date'],
        };
      })
    });
  }

  EditRecord(record) {
    console.log('record',record)
    record.isEdit = true;
    record.Make = record.Make;
    record.Max_speed = record.Max_speed;
    record.Engine_size = record.Engine_size;
    record.Created_date = record.Created_date;
  }



  RemoveRecord(rowID) {
    this.crudService.delete_Car(rowID);
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Make'] = recordRow.Make;
    record['Max_speed'] = recordRow.Max_speed;
    record['Engine_size'] = recordRow.Engine_size;
    record['Created_date'] = recordRow.Created_date;
    this.crudService.update_Car(recordRow.id, record);
    recordRow.isEdit = false;
  }

}
