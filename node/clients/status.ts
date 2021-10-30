import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class Status extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(
      'https://2ec5f9c9-c085-4dd0-acd4-06aa6c59c8ad.mock.pstmn.io',
      context,
      options
    )
  }

  public async getStatus(status: number): Promise<string> {
    return this.http.get(`/giftcards/${status.toString()}`, {
      metric: 'status-get',
    })
  }

  public async getStatusWithHeaders(
    status: number
  ): Promise<IOResponse<string>> {
    return this.http.getRaw(`giftcards/${status.toString()}`, {
      metric: 'status-get-raw',
    })
  }
}
