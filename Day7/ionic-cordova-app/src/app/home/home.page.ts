import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  image: string;

  constructor(private camera: Camera) {}

  takePicture(): void {
    this.camera
      .getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        mediaType: this.camera.MediaType.PICTURE,
        encodingType: this.camera.EncodingType.JPEG,
      })
      .then((imageData) => {
        this.image = imageData;
      })
      .catch((error) => {
        console.log('Error :', error);
      });
  }
}
