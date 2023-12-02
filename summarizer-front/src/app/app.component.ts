import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  readerOutline,
  readerSharp,
  helpCircleOutline,
  helpCircleSharp,
} from 'ionicons/icons';
import { HttpClientModule } from '@angular/common/http';

import { SummarizerService } from './services/summarizer.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  providers: [SummarizerService],
  imports: [HttpClientModule, RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Summarizer', url: '/main', icon: 'reader' },
    { title: 'О приложении', url: '/about', icon: 'help-circle' },
  ];

  constructor() {
    addIcons({
      readerOutline,
      readerSharp,
      helpCircleOutline,
      helpCircleSharp,
    });
  }
}
