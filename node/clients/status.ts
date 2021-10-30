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
        metric: 'status-raw-get',
      }
    )
  }
}

export class Email extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://decorest.vtexcrm.com.br', context, options)
  }

  public async getEmail(): Promise<string> {
    return this.http.post(
      `Export/GenerateExport`,
      JSON.stringify({
        selectedFields:
          'clientName,clientRut,companyRut,creationDate,giftcardAmount,giftcardDeliveryType,giftcardQuantity,giftcardRestriction,giftcardTaxes,orderNumber',
        idDataEntity: 'GD',
        fullText: '',
        searchQuery: 'orderNumber=100000000',
        recipients: 'jorge.espinosa@vtex.com.br',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'X-VTEX-Use-Https': true,
          Cookie:
            'VtexIdclientAutCookie=eyJhbGciOiJFUzI1NiIsImtpZCI6IjU4QTlBODhENDBBMkZBN0U4NzQwQTU5MzFFREUwRUFGMEMxN0E4RTMiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJ2dGV4YXBwa2V5LWRlY29yZXN0LVZJV0FEViIsImFjY291bnQiOiJ2dGV4IiwiYXVkaWVuY2UiOiJhZG1pbiIsImV4cCI6MTYzNTYzMDA3MiwidXNlcklkIjoiNDI0MmY3ZmUtNjFkOC00MzY2LThiZDAtZGI1YWNmMzk5YTZmIiwiaWF0IjoxNjM1NjA4NDcyLCJpc3MiOiJ0b2tlbi1lbWl0dGVyIiwianRpIjoiZjgwZmMwYmItN2FkZC00YzZjLTlkNGEtYjQ2Y2ZhMmE5NWQ1In0.BvBGXbQiPJ1IGoEr7t3OYGol6NkfI_Q5QOE-g7nJKjMYdfb6isVMv0ldA5Kt5PG6z_1s46XD61S4wq58vTuW2w;',
        },
        metric: 'email-post',
      }
    )
  }

  public async getEmailWithHeaders(): Promise<IOResponse<string>> {
    return this.http.postRaw(
      `Export/GenerateExport`,
      JSON.stringify({
        selectedFields:
          'clientName,clientRut,companyRut,creationDate,giftcardAmount,giftcardDeliveryType,giftcardQuantity,giftcardRestriction,giftcardTaxes,orderNumber',
        idDataEntity: 'GD',
        fullText: '',
        searchQuery: 'orderNumber=100000000',
        recipients: 'jorge.espinosa@vtex.com.br',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'X-VTEX-Use-Https': true,
          Cookie:
            'VtexIdclientAutCookie=eyJhbGciOiJFUzI1NiIsImtpZCI6IjU4QTlBODhENDBBMkZBN0U4NzQwQTU5MzFFREUwRUFGMEMxN0E4RTMiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJ2dGV4YXBwa2V5LWRlY29yZXN0LVZJV0FEViIsImFjY291bnQiOiJ2dGV4IiwiYXVkaWVuY2UiOiJhZG1pbiIsImV4cCI6MTYzNTYzMDA3MiwidXNlcklkIjoiNDI0MmY3ZmUtNjFkOC00MzY2LThiZDAtZGI1YWNmMzk5YTZmIiwiaWF0IjoxNjM1NjA4NDcyLCJpc3MiOiJ0b2tlbi1lbWl0dGVyIiwianRpIjoiZjgwZmMwYmItN2FkZC00YzZjLTlkNGEtYjQ2Y2ZhMmE5NWQ1In0.BvBGXbQiPJ1IGoEr7t3OYGol6NkfI_Q5QOE-g7nJKjMYdfb6isVMv0ldA5Kt5PG6z_1s46XD61S4wq58vTuW2w;',
        },
        metric: 'email-post',
      }
    )
  }
}
