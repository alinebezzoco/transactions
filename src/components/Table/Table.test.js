import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Table from './Table'

describe('Table Component', () => {
    beforeAll(() => {
        Enzyme.configure({ adapter: new Adapter() })
    })

    it('Table renders correctly', () => {
        const component = shallow(<Table />)
        expect(component).toMatchSnapshot()
    })
})