import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "@/App";

describe("App routing and rendering", () => {
  it("renders the PanditKailash branding and heading", () => {
    render(<App />);
    expect(screen.getAllByText(/PanditKailash/i).length).toBeGreaterThan(0);
    expect(
      screen.getByRole("heading", { name: /Astrology & Vedic Astrology Readings/i }),
    ).toBeInTheDocument();
  });
});
