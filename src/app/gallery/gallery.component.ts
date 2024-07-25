import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  appList: any[] = [
    {
      ID: '1',
      url: './assests/images/1.jpg',
    },
    {
      ID: '2',
      url: './assests/images/2.jpg',
    },
    {
      ID: '3',
      url: './assests/images/3.jpg',
    },
    {
      ID: '4',
      url: './assests/images/4.jpg',
    },
  ];

  showAlert() {
    alert('hello');
  }

  isAvailable = true;
}
