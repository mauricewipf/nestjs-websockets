import {TickerMessage} from './ticker-message.interface';

export const mockData: TickerMessage[] = [
    {
        type: 'Tor',
        timeInSec: 400,
        message: 'Ibrahimovic schießt das 1:0 für die LA Galaxy',
    },
    {
        type: 'Auswechslung',
        timeInSec: 1600,
        message: 'Auswechslung bei LA Galaxy aufgrund von Verletzung',
    },
    {
        type: 'Strafstoß',
        timeInSec: 2300,
        message: 'LA Galaxy mit der Chance zum 2:0',
    },
];

