import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Input from "./Input"

describe("Input Component", () => {
	beforeAll(() => {
		Enzyme.configure({ adapter: new Adapter() })
	})

	it("renders correctly", () => {
		const component = shallow(<Input id={1} title={"Description"} name={"description"} type={"text"} value={"Hamburgueria"} placeholder={"Digite um nome"} />)
		expect(component).toMatchSnapshot()
	})
})