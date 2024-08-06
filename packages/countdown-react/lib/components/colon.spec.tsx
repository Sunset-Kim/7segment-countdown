import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Colon } from "./colon";

describe("Colon 컴포넌트", () => {
  it("기본 프롭스로 렌더링된 스냅샷과 일치해야 함", () => {
    const { container } = render(<Colon />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("커스텀 프롭스로 렌더링된 스냅샷과 일치해야 함", () => {
    const { container } = render(
      <Colon color="red" size={200} colonGap={80} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
