import React from 'react'
import Enzyme,{mount,shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() });
import App from './App'

describe("when we create a note",()=>{
    let app = shallow(<App/>);
    let textNote = 'test submit';
    beforeEach(()=>{
        app.find('FormControl').simulate('change',{target:{value:textNote}});
    })
    it('should render', () => {
        console.log(app.debug());
    });
    it('should simulate submit button click', () => {
       expect(app.state().text).toEqual(textNote);
    });
    describe('and remounting the components', () => {
        let app2 ;
        beforeEach(()=>{
            app2 = shallow(<App/>);
        })
        it('read the stored cookie', () => {
            console.log(app2.state());
        });
    })
    

    describe('submitting new not', () => {
        beforeEach(()=>{
            app.find('.submitBtn').simulate('click');
        })
        it('should updated the note', () => {
            expect(app.state().note).toEqual([{text:textNote}])
        });
        describe('clicking the clear button',()=>{
            beforeEach(()=>{
                app.find('.btn').simulate('click');
            })
            it('should clear the state', () => {
                expect(app.state().note).toEqual([])
            });
        })
        
    });


})