import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing', function () {
    render(<BoxList />);
});

it('matches snapshot', function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

//creating a test box
function testBox(boxList, height = "25", width = "1", color = "mintcream") {
    const inputHeight = boxList.getByLabelText("Height");
    const inputWidth = boxList.getByLabelText("Width");
    const inputColor = boxList.getByLabelText("Background Color");
    const button = boxList.getByText("Add Box?");

    fireEvent.change(inputHeight, { target: { value: height } });
    fireEvent.change(inputWidth, { target: { value: width } });
    fireEvent.change(inputColor, { target: { value: color } });
    fireEvent.click(button);
}

it('can add boxes without breaking', function () {
    const view = render(<BoxList />);
    testBox(view);
});

it('can remove boxes', function () {
    const view = render(<BoxList />);
    testBox(view);

    const deleteButton = view.getByText("Delete this box?");

    fireEvent.click(deleteButton);
    expect(deleteButton).not.toBeInTheDocument();
});
