import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FormContainer from './FormContainer'

describe('FormContainer Component', () => {
    beforeAll(() => {
        Enzyme.configure({ adapter: new Adapter() })
    })

    it('renders correctly', () => {
        const component = shallow(<FormContainer />)
        expect(component).toMatchSnapshot()
    })
})