import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class SummarizerService {
  private httpClient = inject(HttpClient);

  public summarize(text: string): Observable<{ text: string }> {
    return this.httpClient.post<{ text: string }>(`${environment.api}/summarize`, { text });
  }
}
