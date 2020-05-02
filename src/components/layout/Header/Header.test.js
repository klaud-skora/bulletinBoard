import React from 'react';
import { shallow } from 'enzyme';
import { HeaderComponent } from './Header';

const mockData = {
  match: {
    path: '/',
  },
  state: {
    logged: true,
  },
};



describe('Component Header', () => {
  it('should render without crashing', () => {
    const component = shallow(<HeaderComponent {...mockData}/>);
    expect(component).toBeTruthy();
  });
});
