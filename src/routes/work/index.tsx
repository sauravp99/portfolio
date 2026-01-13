import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/work/")({
  loader: () => redirect({ to: "/" }),
});
