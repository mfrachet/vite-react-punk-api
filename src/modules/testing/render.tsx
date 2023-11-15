import { lightTheme } from "@/ui/themes/lightTheme";
import { render as renderTL } from "@testing-library/react";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

export interface RenderOpts {
  initialRoute: string;
  routePath: string;
}

export const render = (
  children: ReactNode,
  opts: RenderOpts = { initialRoute: "/", routePath: "/" }
) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // ✅ turns retries off
        retry: false,
      },
    },
  });

  return renderTL(
    <ThemeProvider theme={lightTheme}>
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[opts.initialRoute]}>
          <Routes>
            <Route path={opts.routePath} element={children} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
