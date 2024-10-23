import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CreateItem, EditItem, Item, ItemStatus } from './models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  readonly URL = 'http://localhost:3000/items';
  private httpClient = inject(HttpClient);

  constructor() {}

  list() {
    return this.httpClient.get<Item[]>(this.URL);
  }
  add(item: CreateItem) {
    return this.httpClient.post<Item>(this.URL, item);
  }
  get(id: number) {
    return this.httpClient.get<Item>(`${this.URL}/${id}`);
  }
  edit(id: number, item: EditItem) {
    return this.httpClient.patch<Item>(`${this.URL}/${id}`, item);
  }

  delete(id: number) {
    return this.httpClient.delete<void>(`${this.URL}/${id}`);
  }
  approve(id: number) {
    return this.httpClient.patch<Item>(`${this.URL}/${id}`, { status: ItemStatus.APPROVED });
  }

  reject(id: number) {
    return this.httpClient.patch<Item>(`${this.URL}/${id}`, { status: ItemStatus.REJECTED });
  }
}
