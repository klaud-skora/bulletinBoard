import React from 'react';
import { shallow } from 'enzyme';
import { MainLayoutComponent } from './MainLayout';

const mockLocation = {
  pathname: '/',
};

describe('Component MainLayout', () => {
  it('should render without crashing', () => {
    const component = shallow(<MainLayoutComponent location={mockLocation}/>);
    expect(component).toBeTruthy();
  });
});
