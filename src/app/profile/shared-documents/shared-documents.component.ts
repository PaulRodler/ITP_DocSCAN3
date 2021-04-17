import { Component, OnInit } from '@angular/core';
import { SharedDocumentsService } from './shared-documents.service';

@Component({
  selector: 'app-shared-documents',
  templateUrl: './shared-documents.component.html',
  styleUrls: ['./shared-documents.component.css']
})
export class SharedDocumentsComponent implements OnInit {

  sharedDocs: {uname?: string; uid?: string; file_id?: string; file : {uid?: string, name?: string}}[];

  constructor(private sharedService: SharedDocumentsService) { }

  ngOnInit(): void {
    this.sharedService.indexShared().subscribe(req => {
      console.log(req);
      if (req.code === 202) {
        this.sharedDocs = req.data;
      } else {

      }
    });
  }

}
