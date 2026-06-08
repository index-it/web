import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/callback/email-verification-success')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/callback/email-verification-success"!</div>
}
