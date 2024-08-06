import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Dot } from "./dot";

describe("Dot 컴포넌트", () => {
  it("기본 프롭스로 렌더링된 스냅샷과 일치해야 함", () => {
    const { container } = render(<Dot />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("커스텀 프롭스로 렌더링된 스냅샷과 일치해야 함", () => {
    const { container } = render(<Dot color="red" size={200} position="top" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
