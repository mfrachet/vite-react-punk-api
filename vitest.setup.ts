import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import * as matchers from "vitest-axe/matchers";
import { expect } from "vitest";
import { vi } from "vitest";

expect.extend(matchers);
afterEach(cleanup);

// Dirty fix to patch a missing feature showing a warning in the devtools
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(HTMLCanvasElement as any).prototype.getContext = vi.fn();
