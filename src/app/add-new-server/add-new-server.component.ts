import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-server',
  templateUrl: './add-new-server.component.html',
  styleUrls: ['./add-new-server.component.css']
})
export class AddNewServerComponent implements OnInit {

  newServerName: string = '';
  newBlueprintName: string = '';


  constructor() { }

  ngOnInit(): void {
  }


}
