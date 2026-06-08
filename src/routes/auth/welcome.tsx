import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/welcome')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/auth/welcome"!</div>
}
