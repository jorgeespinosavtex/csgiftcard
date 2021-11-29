import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class Status extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://decorest.vtexcommerstable.com.br', context, options)
  }

  public async getStatus(): Promise<string> {
    return this.http.post(
      `api/dataentities/LI/documents`,
      {
        appkey: 'vtexappkey-decorest-VIWADV',
        apptoken:
          'JPMYKRDOKBBCPIVDDWMQASZPVQSHFCMFLECUMPMEWFCNUXTWWLMNVLTRPXDUYVIHOWQLFARNJHTUQMVXWVKUPZJAKLEOMSGBXUZXGIRVUZDOSYADCFXCKOSPMQATVCBQ',
      },
      {
        metric: 'status-get',
      }
    )
  }

  public async getStatusWithHeaders(): Promise<IOResponse<string>> {
    return this.http.postRaw(
      `api/vtexid/apptoken/login`,
      {
        appkey: 'vtexappkey-decorest-VIWADV',
        apptoken:
          'JPMYKRDOKBBCPIVDDWMQASZPVQSHFCMFLECUMPMEWFCNUXTWWLMNVLTRPXDUYVIHOWQLFARNJHTUQMVXWVKUPZJAKLEOMSGBXUZXGIRVUZDOSYADCFXCKOSPMQATVCBQ',
      },
      {
        metric: 'status-raw-get',
      }
    )
  }
}

export class Email extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://decorest.vtexcrm.com.br', context, options)
  }

  public async getEmail(): Promise<string> {
    return this.http.post(
      `api/dataentities/LI/documents`,
      JSON.stringify({
        device: 'test-2',
        email: 'arima121@hotmail.com',
        loginToken: 'log-jwt',
        refreshToken: 'ref-jwt',
      }),
      {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          'X-VTEX-Use-Https': true,
          'X-VTEX-API-AppKey': 'vtexappkey-decorest-VIWADV',
          'X-VTEX-API-AppToken':
            'JPMYKRDOKBBCPIVDDWMQASZPVQSHFCMFLECUMPMEWFCNUXTWWLMNVLTRPXDUYVIHOWQLFARNJHTUQMVXWVKUPZJAKLEOMSGBXUZXGIRVUZDOSYADCFXCKOSPMQATVCBQV',
        },
        metric: 'email-post',
      }
    )
  }

  public async getEmailWithHeaders(): Promise<IOResponse<string>> {
    return this.http.postRaw(
      `api/dataentities/LI/documents`,
      JSON.stringify({
        device: 'test-2',
        email: 'arima121@hotmail.com',
        loginToken: 'log-jwt',
        refreshToken: 'ref-jwt',
      }),
      {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          'X-VTEX-Use-Https': true,
          'X-VTEX-API-AppKey': 'vtexappkey-decorest-VIWADV',
          'X-VTEX-API-AppToken':
            'JPMYKRDOKBBCPIVDDWMQASZPVQSHFCMFLECUMPMEWFCNUXTWWLMNVLTRPXDUYVIHOWQLFARNJHTUQMVXWVKUPZJAKLEOMSGBXUZXGIRVUZDOSYADCFXCKOSPMQATVCBQV',
        },
        metric: 'email-post-raw',
      }
    )
  }
}
