import { Component } from '@angular/core'

export interface ListItem {
  value: any
  showValue: string
}

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent {
  public items: ListItem[] = [
    {
      value: '',
      showValue: 'Ocean Import Brazil'
    },
    {
      value: '',
      showValue: 'Usa Import'
    },
    {
      value: '',
      showValue: 'Panama Importação'
    },
    {
      value: '',
      showValue: 'Colombia Importação Maritima'
    },
    {
      value: '',
      showValue: 'Colombia Exportação de Cocaina'
    },
    {
      value: '',
      showValue: 'Ocean Import Brazil'
    },
    {
      value: '',
      showValue: 'Usa Import'
    },
    {
      value: '',
      showValue: 'Panama Importação'
    },
    {
      value: '',
      showValue: 'Colombia Importação Maritima'
    },
    {
      value: '',
      showValue: 'Colombia Exportação de Cocaina'
    }
  ]
}
