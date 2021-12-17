import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Angular Ubalde';
  header = null;
  imagen: string = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages5.alphacoders.com%2F531%2F531494.jpg&f=1&nofb=1';

  name: string = 'Alita'
  surname: string = 'Battle Angel'

  getCompleteName(): string {

    return ''.concat(this.name, ' ', this.surname);
  }
}
