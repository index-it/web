import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/callback/lists/accept-invite')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/callback/lists/accept-invite"!</div>
}
