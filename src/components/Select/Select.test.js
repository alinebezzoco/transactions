import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Select from "./Select";

describe("Select Component", () => {
  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
  });

  it("renders correctly", () => {
    const transactionOptions = ["Débito", "Crédito"]
    const component = shallow(
      <Select
      title={"Tipo de transação"}
      name={"transaction"}
      options={transactionOptions}
      value={"Débito"}
      placeholder={"Selecionar"}
      required={true}
    />
    );
    expect(component).toMatchSnapshot();
  });
});
