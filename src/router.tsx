import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'
import { getQueryClient } from './integrations/tanstack-query/QueryClientContextProvider'
import { getIxApiClient } from './integrations/index/IxApiClientContextProvider'

export function getRouter() {
  const queryClient = getQueryClient()
  const ixApiClient = getIxApiClient()

  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
    context: {
      queryClient,
      ixApiClient,
    },
  })

  setupRouterSsrQueryIntegration({
    router,
    queryClient: queryClient,
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
