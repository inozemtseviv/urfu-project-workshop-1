import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonTextarea,
  IonList,
  IonButton, IonText, IonProgressBar, IonLoading, AlertController, IonCard, IonCardHeader, IonCardTitle, IonCardContent
} from '@ionic/angular/standalone';
import { catchError, map, of, tap } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

import { SummarizerService } from '../../services/summarizer.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AsyncPipe],
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonTextarea, IonList, IonButton, IonText, AsyncPipe, IonProgressBar, NgIf, IonLoading, IonCard, IonCardHeader, IonCardTitle, IonCardContent],
})
export class MainPage {
  public isLoading$ = of(false);
  public result$ = of('');

  constructor(private summarizer: SummarizerService, private alertController: AlertController) {
  }

  private async showAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Что-то пошло не так',
      message: 'Попробуйте сократить позднее.',
      buttons: ['Понятно'],
    });

    await alert.present();
  }

  public async summarize(text: string): Promise<void> {
    this.isLoading$ = of(true);

    this.result$ = this.summarizer.summarize(text).pipe(
      catchError(() => {
        this.showAlert();
        return of({ text: '' });
      }),
      map(({ text }) => text),
      tap(() => {
        this.isLoading$ = of(false);
      }),
    );
  }
}
