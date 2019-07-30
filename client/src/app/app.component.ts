import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {TickerMessage} from './ticker-message.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  views: Observable<number>;
  private tickerMessages: TickerMessage[];

  constructor(
    private apiService: ApiService,
  ) {
    this.tickerMessages = [];
  }

  ngOnInit(): void {
    this.apiService.receiveUpdates().subscribe((tickerMessage: TickerMessage) => {
      console.log('Receiving update:', tickerMessage);
      this.tickerMessages.push(tickerMessage);
    });

    this.views = this.apiService.getViews();
  }

}
