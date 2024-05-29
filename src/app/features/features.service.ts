import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeaturesService {
  constructor(private http: HttpClient) {}

  Get_data_From_SERVER() {
    return this.http.get('assets/Data/Features/Feat-data.json');
  }
}
