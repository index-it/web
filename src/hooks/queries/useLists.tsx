import { useIxApiClient } from '#/hooks/useIxApiClient.tsx'
import { useQuery } from '@tanstack/react-query'
import { lists_qk } from '#/lib/query/query-keys.ts'

export function useLists() {
  const ixApiClient = useIxApiClient();

  return useQuery({
    queryKey: lists_qk,
    queryFn: ixApiClient.get_lists
  })
}