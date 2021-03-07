import React from 'react';
import {shallow} from 'enzyme'; //install enzyme and search for docs online!
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../../components/Header';
import toJSON from 'enzyme-to-json';

// install react-test-renderer
//Snapshot testing!

test('should render Header correctly', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot(); //install >yarn add enzyme-to-json@3.0.1 to have better json file

   // expect(wrapper.find('h1').length).toBe(1); //Enzyme rendering and testing
   /*  const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    //console.log(renderer.getRenderOutput());
    expect(renderer.getRenderOutput()).toMatchSnapshot(); */
});