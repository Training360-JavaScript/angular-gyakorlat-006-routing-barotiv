import { Injectable } from '@angular/core';
import { Event } from 'src/app/model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

 data: Event[] = [
    {
      name: 'Születésnap',
      date: '2022. január 13.',
      time: '05:19',
      location: {
        address: 'Szépvölgyi út 225.',
        city: 'Budapest',
        country: 'Magyarország'
      }
    },
    {
      name: 'Névnap',
      date: '2022. szeptember 5.',
      time: '20:00',
      location: {
        address: 'Kolossy tér 3.',
        city: 'Budapest',
        country: 'Magyarország'
      }
    },
    {
      name: 'Tóátúszás',
      date: '2022. június 21.',
      time: '09:00',
      location: {
        address: 'Attila út 101.',
        city: 'Hévíz',
        country: 'Magyarország'
      }
    },
  ]

  getAll(): Event[] {
    return this.data
  }

  constructor() { }
}
