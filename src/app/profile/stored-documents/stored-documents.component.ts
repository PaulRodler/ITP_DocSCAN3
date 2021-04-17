import { Component, OnInit } from '@angular/core';
import { StoredDocumentsService } from './stored-documents.service';

@Component({
  selector: 'app-stored-documents',
  templateUrl: './stored-documents.component.html',
  styleUrls: ['./stored-documents.component.css']
})
export class StoredDocumentsComponent implements OnInit {

  directories: {id?: string; uid?: string; name?: string; color?: string;}[];

  constructor(private storedService: StoredDocumentsService) { }
  selectedMenu?: {folderId?: string, name?: string; color: string;} =
  {folderId: '', name: '', color: ''};
  categories:{
    id?: string; uid?: string; name?: string; folder?: string; last_opened?: string;}[] = []

  addFolder: {name?: string; color?: string} = {name: '', color: ''};

  addCatName = '';

  ngOnInit(): void {
    this.storedService.indexFolder().subscribe(req => {
      console.log(req);
      if(req.code === 202){
        this.directories = req.data;
      }else {

      }
    });
    
  }

  setMenu(item): void{
    this.selectedMenu.folderId = item.id;
    this.selectedMenu.name = item.name;
    this.selectedMenu.color = item.color;

    this.storedService.view(item.id).subscribe(req => {
      if(req.code === 202){
        console.log(req.data);
        this.categories = req.data;
      }else {
        this.categories = [];
      }
  });
  }

  save(): void{
    this.storedService.addFoler(this.addFolder).subscribe(req => {
      console.log(req);
      if(req.code === 202){
        location.reload();
      }
    });

  }

  addCategory(folder_id: string): void{
    console.log(folder_id);
    let name = this.addCatName;
    let data = {folder_id, name};
    this.storedService.addCate(data).subscribe(req => {
      console.log(req);
    });
  }

}


