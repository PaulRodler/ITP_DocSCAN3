import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoredDocumentsService } from '../stored-documents.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  id?: number;
  files: {file_id?: string; uid?: string; name?: string; category?: string; content?: string; file_type?: string}[];
  
  addFile: { name?: string; category?: string; content?: string; file_type?: string} = 
    {name: '', category: '', content: '', file_type: ''};

  errorMsg= '';
  constructor(private storedDocsService: StoredDocumentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number.parseInt(params.get('id'));
      this.addFile.category = ""+ this.id;
      this.storedDocsService.getCatsFiles(this.id).subscribe(req => {
        console.log(req);
        if(req.code === 202){
          this.files = req.data; 
        }else{
          this.errorMsg = "Keine Einträge gefunden";
        }
      });
    });
    
  }

  add(): void {
    console.log(this.addFile);
    this.storedDocsService.add(this.addFile).subscribe(req => {
      console.log(req);
    });
  }

}
