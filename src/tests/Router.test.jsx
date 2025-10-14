import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Router } from "../Router";

describe('Router', () => {
  it('should work', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })
})