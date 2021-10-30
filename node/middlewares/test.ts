export async function test(ctx: Context, next: () => Promise<any>) {
  const {
    state: { code },
    clients: { test: testClient },
  } = ctx

  console.info('Received code:', code)

  const testResponse = await testClient.getTest(code)

  console.info('Test response:', testResponse)

  const {
    headers,
    data,
    status: responseTest,
  } = await testClient.getTestWithHeaders(code)

  console.info('Test headers', headers)
  console.info('Test data:', data)

  ctx.status = responseTest
  ctx.body = data
  ctx.set('Cache-Control', headers['cache-control'])

  await next()
}
