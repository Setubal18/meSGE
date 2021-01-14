import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

interface Response {
  message?: string;
  status?: number;
  error?: any
}
@Injectable({
  providedIn: 'root'
})

export class ApiResponseService {
  private toast: any;
  constructor(private toastController: ToastController) { }

  public async success(body: Response) {
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

  public async danger(body: Response) {
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
