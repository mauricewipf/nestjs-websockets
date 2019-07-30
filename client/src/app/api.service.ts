import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';
import {TickerMessage} from './ticker-message.interface';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        private socket: Socket,
    ) {
    }

    receiveUpdates(): Observable<TickerMessage> {
        this.socket.emit('liveticker');
        return this.socket.fromEvent('liveticker');
    }

    getViews(): Observable<number> {
        return this.socket.fromEvent('views');
    }

}
