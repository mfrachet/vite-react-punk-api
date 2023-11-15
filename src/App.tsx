import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./ui/themes/components/ThemeProvider";
import { Box } from "./ui/components/Box";

const LazyHome = lazy(() => import("./pages/Homepage"));
const LazyBeerDetail = lazy(() => import("./pages/BeerDetail"));

const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LazyHome />,
    },
    { path: "beers/:id", element: <LazyBeerDetail /> },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export const App = () => {
  return (
    <ThemeProvider>
      <Box $bg={50}>
        <QueryClientProvider client={queryClient}>
          <Suspense>
            <RouterProvider router={router} />
          </Suspense>
        </QueryClientProvider>
      </Box>
    </ThemeProvider>
  );
};
