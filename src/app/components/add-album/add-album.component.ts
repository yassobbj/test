import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlbumService } from 'src/app/services/album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css'],
})
export class AddAlbumComponent {
  albumForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private albumService: AlbumService,
    private router: Router
  ) {
    this.albumForm = this.fb.group({
      title: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]],
      coverPicture: ['', [Validators.minLength(5)]],
    });
  }

  onSubmit(): void {
    if (this.albumForm.valid) {
      const newAlbum = {
        ...this.albumForm.value,
        id: Math.floor(Math.random() * 1000), // Auto-génération pour tester
        creationDate: new Date(),
        archived: 0,
      };
      this.albumService.addAlbum(newAlbum).subscribe(() => {
        this.router.navigate(['/albums']);
      });
    }
  }
}
