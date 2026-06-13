import { IxApiError } from '#/lib/models/index/core/IxApiError'
import { IxApiErrorResponse } from '#/lib/services/IxApiErrorResponse'
import { QueryClient } from '@tanstack/react-query'

export function getQueryClient() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: (failureCount, error) => {
          // TODO: Test istanceof
          if (
            error instanceof IxApiError &&
            error.ixApiErrorResponse == IxApiErrorResponse.NOT_AUTHENTICATED
          ) {
            return false
          }

          return failureCount <= 2
        },
      },
    },
  })

  return queryClient
}
