import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/under-construction')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/under-construction"!</div>
}
