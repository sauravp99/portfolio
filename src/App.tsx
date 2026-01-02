import { RouterProvider, createRouter } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";
const router = createRouter({
  routeTree,
  defaultViewTransition: true,
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
