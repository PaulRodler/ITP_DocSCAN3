import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from './personal-data.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {
  personalData: {uname?: string; firstname?: string; surname?: string; gender?: string; email?: string;} = 
    {uname: '', firstname: '', surname: '', gender: '', email: ''};


  errorMsg = '';
  successMsg = '';
  constructor(private personalService: PersonalDataService) { }

  ngOnInit(): void {
    this.personalService.index().subscribe(req => {
      console.log(req);
      if(req.code === 202){
        this.personalData = req.data;
      }else {
        this.errorMsg = "Error: "+ req.code + ";"+ req.message;
      }
    });
  }

  edit(): void{
    this.personalService.edit(this.personalData).subscribe(req => {
      console.log(req);
      if(req.code === 202){
        this.successMsg="Änderungen wurden übernommen";
      }else {
        this.errorMsg = "Error: "+ req.code + ";"+ req.message;
      }
    });
  }

}
