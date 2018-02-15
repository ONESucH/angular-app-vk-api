import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-shablon-user',
  templateUrl: './shablon-user.component.html',
  styleUrls: ['./shablon-user.component.css']
})

export class ShablonUserComponent {
  public tokken = 'bc33834384bba02bba398f4cacd2533350a6e8bd4ac06699b8eac36bf7cc8e628e06218b484fd3';
  public url = 'https://api.vk.com/method/users.search?q=&sort=1&offset&count=1000&city1=&country=1&fields=photo_id,verified,sex,bdate,city,country,home_town,photo_100,photo_200,photo_max,online,lists,nickname,occupation,domain,has_mobile,contacts,site,educc&access_token=' + this.tokken + '&v=5.69';
  arr: any[];

  constructor(private http: Http) {
  }

  getUsers() {
    this.http.get(this.url)
      .subscribe(
        data => {

          /* Парсим в json */
          const dataJson = data.json();

          /* Рендерим данные */
          this.arr = dataJson.response.items;

          console.log('this.arr', this.arr);
        },
        //error => console.log('error'),
        //() => console.log('success')
      )
  }
}
