import {OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse} from '@nestjs/websockets';
import {Client, Server} from 'socket.io';
import {from, Observable, of} from 'rxjs';
import {concatMap, delay} from 'rxjs/operators';
import {TickerMessage} from '../ticker-message.interface';
import {mockData} from '../data.mock';

@WebSocketGateway()
export class LivetickerGateway implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer() server: Server;

    views: number = 0;

    async handleConnection() {
        this.views++;
        this.server.emit('views', this.views);
    }

    async handleDisconnect() {
        this.views--;
        this.server.emit('views', this.views);
    }

    @SubscribeMessage('liveticker')
    handleLiveticker(client: Client, data: unknown): Observable<WsResponse<TickerMessage>> {
        return from(mockData).pipe(
            concatMap((tickerMessage: TickerMessage) => {
                return of({event: 'liveticker', data: tickerMessage}).pipe(
                    delay(2000),
                );
            }),
        );
    }

}
