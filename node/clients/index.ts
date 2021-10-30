import { IOClients } from '@vtex/api'

import Status, { Email } from './status'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }

  public get email() {
    return this.getOrSet('email', Email)
  }
}
