import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/lists/$list_id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/lists/$list_id"!</div>
}
