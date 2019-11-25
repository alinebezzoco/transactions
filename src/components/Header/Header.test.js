import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

describe('Header Component', () => {
    beforeAll(() => {
        Enzyme.configure({ adapter: new Adapter() })
    })

    it('Header renders correctly', () => {
        const component = shallow(<Header />)
        expect(component).toMatchSnapshot()
    })
})