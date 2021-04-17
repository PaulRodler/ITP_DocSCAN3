import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppService } from './app.service';
import { LoginService } from './login/login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DocSCAN';
  constructor(private appService: AppService) { }


  ngOnInit(): void {
    localStorage.removeItem('docSca_crsfToken')
    /*console.log("getcsrf");
    this.appService.getcsrf().subscribe(req =>{
      console.log('TOKEN ');
      console.log('CSRF ');
      console.log(req.data);
      localStorage.setItem('docSca_crsfToken', req.data)
      environment.csrfToken = req.data;
    });*/
  };
}

