import * as https from 'https'

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
    super('https://decorest.vtexcrm.com.br', context, options)
  }

  public async getEmail(): Promise<string> {
    const agent = new https.Agent({
      rejectUnauthorized: false,
    })

    return this.http.post(
      `Export/GenerateExport`,
      JSON.stringify({
        selectedFields:
          'clientName&clientRut&companyRut&creationDate&giftcardAmount&giftcardDeliveryType&giftcardQuantity&giftcardRestriction&giftcardTaxes&orderNumber',
        idDataEntity: 'GD',
        fullText: '',
        searchQuery: '',
        customSearchId: '',
        recipients: 'jorge.espinosa@vtex.com.br',
      }),
      {
        httpsAgent: agent,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Cookie:
            'VtexIdclientAutCookie=eyJhbGciOiJFUzI1NiIsImtpZCI6IkE5MDZFOTlFRkUwNjVCMDdDOEMzNzY2RjU5RDE2QzBCMkMzNDA0MjEiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJ2dGV4YXBwa2V5LWRlY29yZXN0LVZJV0FEViIsImFjY291bnQiOiJ2dGV4IiwiYXVkaWVuY2UiOiJhZG1pbiIsImV4cCI6MTYzNTU4MjMzMywidXNlcklkIjoiNDI0MmY3ZmUtNjFkOC00MzY2LThiZDAtZGI1YWNmMzk5YTZmIiwiaWF0IjoxNjM1NTYwNzMzLCJpc3MiOiJ0b2tlbi1lbWl0dGVyIiwianRpIjoiNTNmM2M1YTAtNzg4ZC00NTU1LWFjYTMtNzEwMDU1YmIwMTA2In0.icJCEtTrrayXYGvM947d1LIask8WqBbr3VxSKxx5epxfeqrLp-5pyLIWgulDTd9cOiMw1SqEAYaAmXzpufnSlw;',
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
          'clientName&clientRut&companyRut&creationDate&giftcardAmount&giftcardDeliveryType&giftcardQuantity&giftcardRestriction&giftcardTaxes&orderNumber',
        idDataEntity: 'GD',
        fullText: '',
        searchQuery: '',
        customSearchId: '',
        recipients: 'jorge.espinosa@vtex.com.br',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Cookie:
            'VtexIdclientAutCookie=eyJhbGciOiJFUzI1NiIsImtpZCI6IkE5MDZFOTlFRkUwNjVCMDdDOEMzNzY2RjU5RDE2QzBCMkMzNDA0MjEiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJ2dGV4YXBwa2V5LWRlY29yZXN0LVZJV0FEViIsImFjY291bnQiOiJ2dGV4IiwiYXVkaWVuY2UiOiJhZG1pbiIsImV4cCI6MTYzNTU4MjMzMywidXNlcklkIjoiNDI0MmY3ZmUtNjFkOC00MzY2LThiZDAtZGI1YWNmMzk5YTZmIiwiaWF0IjoxNjM1NTYwNzMzLCJpc3MiOiJ0b2tlbi1lbWl0dGVyIiwianRpIjoiNTNmM2M1YTAtNzg4ZC00NTU1LWFjYTMtNzEwMDU1YmIwMTA2In0.icJCEtTrrayXYGvM947d1LIask8WqBbr3VxSKxx5epxfeqrLp-5pyLIWgulDTd9cOiMw1SqEAYaAmXzpufnSlw;',
        },
        metric: 'email-post',
      }
    )
  }
}
