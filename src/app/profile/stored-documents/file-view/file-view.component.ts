import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { StoredDocumentsService } from '../stored-documents.service';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.css']
})
export class FileViewComponent implements OnInit {
  id?: number;
  disableeditMode = true;

  file: { category?: string; content?: string; file_id?: string; file_type?: string; name?: string; uid?: string; shared?: { uid?: string; file_id?: string; uname?: string }[] } =
    { name: '', category: '', content: '', shared: [] };

  allUsers: { uid?: string; uname?: string }[];
  shareWith: { uid?: string; uname?: string } = { uid: '', uname: '' };
  constructor(private storedDocsService: StoredDocumentsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number.parseInt(params.get('id'));
      this.storedDocsService.getFile(this.id).subscribe(req => {
        console.log(req);
        if (req.code === 202) {
          this.file = req.data;
        } else {

        }
      });
    });

    this.storedDocsService.getAllUsers().subscribe(req => {
      if (req.code === 202) {
        this.allUsers = req.data;
      } else {

      }
    });

  }

  toggleMode(): void {
    this.disableeditMode = !this.disableeditMode;
    console.log(this.disableeditMode);
  }

  save(): void {
    console.log(this.file.content);
    this.storedDocsService.save(this.file).subscribe(req => {
      console.log(req);
    });
  }

  delete(): void {
    this.storedDocsService.delete(this.file.file_id).subscribe(req => {
      if (req.code === 202) {
        this.router.navigate(['/storedDocs/files/' + this.file.category]);
      }

    });
  }

  share(): void {
    this.storedDocsService.share(this.file.file_id, this.shareWith.uid).subscribe(req => {
      if (req.code === 202) {
        let id = this.file.file_id;
        let user = this.allUsers.filter(user => user.uid === this.shareWith.uid)[0];
        this.file.shared.push({ file_id: id, uid: user.uid, uname: user.uname });
      }
    });
  }
  unshare(uid): void {
    this.storedDocsService.unshare(this.file.file_id, uid).subscribe(req => {
      if (req.code === 202) {
        location.reload();
      }
    });
  }
}
