import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/work/prosperai')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/work/prosperai"!</div>
}
