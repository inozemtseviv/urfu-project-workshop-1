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
  IonButton, IonText, IonProgressBar, IonLoading
} from '@ionic/angular/standalone';
import { map, of, tap } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

import { SummarizerService } from '../../services/summarizer.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AsyncPipe],
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonTextarea, IonList, IonButton, IonText, AsyncPipe, IonProgressBar, NgIf, IonLoading],
})
export class MainPage {
  public isLoading$ = of(false);
  public result$ = of('');

  constructor(private summarizer: SummarizerService) {
  }

  public async summarize(text: string): Promise<void> {
    this.isLoading$ = of(true);

    this.result$ = this.summarizer.summarize(text).pipe(
      map(({ text }) => text),
      tap(() => {
        this.isLoading$ = of(false);
      })
    );
  }
}
