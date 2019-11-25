import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "./Button";

describe("Button Component", () => {
  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
  });

  it("renders correctly", () => {
    const component = shallow(<Button className={"primary"}>{"Enviar"}</Button>);
    expect(component).toMatchSnapshot();
  });
});
