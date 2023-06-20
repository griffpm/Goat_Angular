import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `<h2>404 Page not Found</h2>
              <a routerLink="/goats"></a>`,
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {

}
