import { createServerFn } from '@tanstack/react-start'
import { GoogleOAuthClient } from '#/lib/services/GoogleOAuthClient.ts'

export const google_auth_exchange_code_for_id_token = createServerFn({
  method: 'GET',
})
  .validator((data: { code: string }) => data)
  .handler(async ({ data }) => {
    const code = data.code

    const googleOAuthClient = new GoogleOAuthClient()
    const googleClientId = process.env.PUBLIC_GOOGLE_CLIENT_ID

    if (googleClientId === undefined) {
      console.error('Missing NEXT_PUBLIC_GOOGLE_CLIENT_ID env variable')
      return new Response('Something went wrong', {
        status: 500,
      })
    }

    const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET
    if (googleClientSecret === undefined) {
      console.error('Missing GOOGLE_CLIENT_SECRET env variable')
      return new Response('Something went wrong', {
        status: 500,
      })
    }

    try {
      // postmessage reasoning: https://github.com/MomenSherif/react-oauth/issues/71
      const idToken = await googleOAuthClient.exchange_code_for_id_token(
        code,
        googleClientId,
        googleClientSecret,
        'postmessage',
      )
      return Response.json({ id_token: idToken })
    } catch (e) {
      console.error(e)
      return new Response('Something went wrong', {
        status: 500,
      })
    }
  })
