import React from 'react'
import Enzyme,{mount,shallow} from 'enzyme'
import Note from './Note'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() });

const props = {
    note:{text:'hello'}
};

describe('Note Component',()=>{
    let notes = shallow(<Note {...props} />); 

    it('should render Note', () => {
        expect(notes.find('div').text()).toEqual('hello')
    });
});