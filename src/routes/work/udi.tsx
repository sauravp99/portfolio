import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work/udi")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/work/udi"!</div>;
}
