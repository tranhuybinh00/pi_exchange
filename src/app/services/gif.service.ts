import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '@constant';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  gifDetailBehaviorSubject = new BehaviorSubject<any>(null);
  constructor(
    private _http: HttpClient
  ) { }

  list(paginator: any): Observable<any> {
    const options = {
      params: {
        offset: paginator.offset || 0,
        api_key: 'Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g',
        pingback_id: '187ea6b18198c9cb'
      }
    };
    return this._http.get<any>(API.GIF.LIST, options);
  }

  search(paginator: any): Observable<any> {
    const options = {
      params: {
        q: paginator.q || '',
        offset: paginator.offset || 0,
        api_key: 'Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g',
        pingback_id: '187ea6b18198c9cb'
      }
    };

    return this._http.get<any>(API.GIF.SEARCH, options);
  }
}
