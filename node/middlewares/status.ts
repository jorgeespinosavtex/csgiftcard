export async function status(ctx: Context, next: () => Promise<any>) {
  const {
    state: { code },
    clients: { status: statusClient },
  } = ctx

  console.info('Received code:', code)

  const statusResponse = await statusClient.getStatus()

  console.info('Status response:', statusResponse)

  const {
    headers,
    data,
    status: responseStatus,
  } = await statusClient.getStatusWithHeaders()

  console.info('Status headers', headers)
  console.info('Status data:', data)

  ctx.status = responseStatus
  ctx.body = data
  ctx.set('Cache-Control', headers['cache-control'])

  await next()
}

export async function email(ctx: Context, next: () => Promise<any>) {
  const {
    state: { code },
    clients: { email: emailClient },
  } = ctx

  console.info('Received code:', code)

  const emailResponse = await emailClient.getEmail()

  console.info('Email response:', emailResponse)

  const {
    headers,
    data,
    status: responseEmail,
  } = await emailClient.getEmailWithHeaders()

  console.info('Email headers', headers)
  console.info('Email data:', data)

  ctx.status = responseEmail
  ctx.body = data
  ctx.set('Cache-Control', headers['cache-control'])

  await next()
}
