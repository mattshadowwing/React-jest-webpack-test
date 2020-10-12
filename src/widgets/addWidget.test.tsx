import * as React from 'react';
import renderer from 'react-test-renderer';
import AddWidget from './addWidget';

test("AddWidget renders correctly", () => {
    const props = {};
    const tree = renderer.create(<AddWidget {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
});