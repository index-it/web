import { IxApiClient } from '@/lib/services/IxApiClient'

export function getIxApiClient() {
  const baseUrl = process.env.IX_API_BASE_URL ?? 'https://api.index-it.app'
  const ixApiClient = new IxApiClient(baseUrl)

  return ixApiClient
}
