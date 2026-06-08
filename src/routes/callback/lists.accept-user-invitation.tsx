import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/callback/lists/accept-user-invitation')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/callback/lists/accept-user-invitation"!</div>
}
