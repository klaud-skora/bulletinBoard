import React from 'react';
import { shallow } from 'enzyme';
import { HomepageComponent } from './Homepage';

const posts = [
  {
    id: 0,
    title: 'Thunderbolts comming!',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    published: '12-06-2019',
    updated: '04-02-2020',
    email: 'johndoe@example.com',
    status: 'published',
  },
  {
    id: 1,
    title: 'Time for planning holidays!',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    published: '12-06-2019',
    updated: '04-02-2020',
    email: 'johndoe@example.com',
    status: 'published',
  },
  {
    id: 2,
    title: 'Charity collection "Give us your clothes"',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    published: '12-06-2019',
    updated: '04-02-2020',
    email: 'johndoe@example.com',
    status: 'published',
  },
  {
    id: 3,
    title: 'New solution for mosquito',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    published: '12-06-2019',
    updated: '04-02-2020',
    email: 'johndoe@example.com',
    status: 'published',
  },
];

describe('Component Homepage', () => {
  it('should render without crashing', () => {
    const component = shallow(<HomepageComponent posts={posts} />);
    expect(component).toBeTruthy();
  });
});
