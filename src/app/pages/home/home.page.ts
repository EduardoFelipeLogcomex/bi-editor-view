import { Component } from '@angular/core'
import { ConnService } from 'src/app/core/services/conn.service'

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.sass']
})
export class HomePage {
  constructor (public conn: ConnService) {
    this.conn.on('pong', () => {
      console.log('recebi um pong')
    })
  }

  public showProducts (): void {
    console.log('SHOWING PRODUCTS....')
    this.conn.send('ping')
  }
}
