import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class Test extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(
      'https://2ec5f9c9-c085-4dd0-acd4-06aa6c59c8ad.mock.pstmn.io',
      context,
      options
    )
  }

  public async getTest(test: number): Promise<string> {
    return this.http.get(test.toString(), {
      metric: 'test-get',
    })
  }

  public async getTestWithHeaders(test: number): Promise<IOResponse<string>> {
    return this.http.getRaw(test.toString(), {
      metric: 'test-get-raw',
    })
  }
}
