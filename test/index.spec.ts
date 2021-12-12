import { expect } from "chai";
import { spy } from "sinon";

it("runs a test", () => {
  const func = spy();

  func(123);

  expect(func).to.have.been.calledWith(123);
});
