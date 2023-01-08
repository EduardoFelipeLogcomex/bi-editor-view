import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.sass']
})
export class CardButtonComponent {
  @Input() route: string | undefined
  @Input() text: string = ''
  @Input() prefix: string | undefined
  @Input() suffix: string | undefined
  @Input() enableEmitter: boolean = false

  @Output() clickEvt = new EventEmitter()

  constructor (public router: Router) {}

  navigator (): void {
    if (this.enableEmitter) {
      this.clickEvt.emit()
      return
    }

    if (this.route) {
      this.router.navigate([this.route])
    }
  }
}
