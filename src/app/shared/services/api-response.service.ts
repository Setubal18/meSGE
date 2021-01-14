import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ApiResponseService {
  private toast: any;
  constructor(private toastController: ToastController) { }

  public async success(body) {
    this.toast = await this.toastController.create({
      message: body.message,
      color: 'success',
      position: 'top',
      duration: 2000,
      animated: true
    }).then((toastData) => {
      toastData.present();
    });

  }

  public async danger(body) {
    this.toast = await this.toastController.create({
      message: body.error,
      color: 'danger',
      position: 'top',
      duration: 2000,
      animated: true
    }).then((toastData) => {
      toastData.present();
    });

  }


}
