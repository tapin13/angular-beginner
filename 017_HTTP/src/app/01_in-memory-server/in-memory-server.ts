import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ItemData implements InMemoryDbService {
    createDb() {
        let items = [
            { id: 1, name: 'item 1' },
            { id: 2, name: 'item 2' },
            { id: 3, name: 'item 3' },
            { id: 4, name: 'item 4' },
        ];

        return { items };
    }
}
