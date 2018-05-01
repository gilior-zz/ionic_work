import {Injectable} from '@angular/core';

@Injectable()
export class AppStorageService {
    get(key: string) {
        let item = localStorage.getItem(key);
        if(item)
            return JSON.parse(item);
        return null;    
    }

    set(key: string, val: any) {
        localStorage.setItem(key, JSON.stringify(val));
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }
}
