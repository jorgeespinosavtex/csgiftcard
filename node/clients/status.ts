import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class Status extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://vtexid.vtexcommercestable.com.br', context, options)
  }

  public async getStatus(): Promise<string> {
    return this.http.post(
      `api/vtexid/apptoken/login`,
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
        metric: 'status-get',
      }
    )
  }
}
