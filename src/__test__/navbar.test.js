import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../components';

jest.mock('react-redux');
describe('Testing for navbar component', () => {
  test('Snapshot for the navbar', () => {
    const tree = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
