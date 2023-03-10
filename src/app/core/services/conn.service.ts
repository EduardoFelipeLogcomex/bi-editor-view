import { Injectable } from '@angular/core'
import { IpcRenderer } from 'electron'

interface Window {
  require: NodeRequire
}

@Injectable()
export class ConnService {
  private _ipc: IpcRenderer | undefined = void 0;

  constructor () {
    if ((window as Window).require) {
      try {
        this._ipc = window.require('electron').ipcRenderer
      } catch (e) {
        throw e
      }
    } else {
      console.warn('Electron\'s IPC was not loaded')
    }
  }

  public on (channel: string, listener: any): void {
    if (!this._ipc) return

    this._ipc.on(channel, listener)
  }

  public send (channel: string, ...args: any): void {
    if (!this._ipc) return

    this._ipc.send(channel, ...args)
  }
}
