import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface Launcher {
  id: number;
  name: string;
}

@Injectable()
export class AppsService {
  constructor(
    private http: HttpClient
  ) { }

  getApps(): Promise<Launcher[]> {
    return this.http.get<Launcher[]>("/apps").toPromise();
  }
}