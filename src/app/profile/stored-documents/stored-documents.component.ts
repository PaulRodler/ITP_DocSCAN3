import { Component, OnInit } from '@angular/core';
import { StoredDocumentsService } from './stored-documents.service';

@Component({
  selector: 'app-stored-documents',
  templateUrl: './stored-documents.component.html',
  styleUrls: ['./stored-documents.component.css']
})
export class StoredDocumentsComponent implements OnInit {

  constructor(private storedService: StoredDocumentsService) { }
  selectedMenu = [];

  ngOnInit(): void {
    
  }

}
