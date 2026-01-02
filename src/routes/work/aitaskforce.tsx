import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/work/aitaskforce')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/work/aitaskforce"!</div>
}
