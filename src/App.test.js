import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Box from './components/Box';

describe('Box component', () => {
  const imageUrl = 'https://example.com/image.jpg';
  const overflowHeader = 'Overflow Header';
  const overflowText = 'Overflow Text';
  const size = 100;
  const onClick = jest.fn();

  beforeEach(() => {
    jest.spyOn(window.screen, 'width', 'get').mockReturnValue(1024); // mock the screen width to a large value
  });

  it('renders an image', () => {
    render(<Box onClick={onClick} imageUrl={imageUrl} overflowHeader={overflowHeader} overflowText={overflowText} size={size} />);
    const image = screen.getByAltText('Box');
    expect(image).toBeInTheDocument();
  });

  it('does not render overflow text by default', () => {
    render(<Box onClick={onClick} imageUrl={imageUrl} overflowHeader={overflowHeader} overflowText={overflowText} size={size} />);
    const overflowTextElement = screen.queryByText(overflowText);
    expect(overflowTextElement).not.toBeInTheDocument();
  });

  it('renders overflow text when hovered', () => {
    render(<Box onClick={onClick} imageUrl={imageUrl} overflowHeader={overflowHeader} overflowText={overflowText} size={size} />);
    const box = screen.getByAltText('Box').parentNode;
    fireEvent.mouseEnter(box);
    const overflowTextElement = screen.getByText(overflowText);
    expect(overflowTextElement).toBeInTheDocument();
  });

  it('does not render overflow text after hover ends', () => {
    render(<Box onClick={onClick} imageUrl={imageUrl} overflowHeader={overflowHeader} overflowText={overflowText} size={size} />);
    const box = screen.getByAltText('Box').parentNode;
    fireEvent.mouseEnter(box);
    fireEvent.mouseLeave(box);
    const overflowTextElement = screen.queryByText(overflowText);
    expect(overflowTextElement).not.toBeInTheDocument();
  });

  it('renders overflow text on small screen', () => {
    jest.spyOn(window.screen, 'width', 'get').mockReturnValue(600); // mock the screen width to a small value
    render(<Box onClick={onClick} imageUrl={imageUrl} overflowHeader={overflowHeader} overflowText={overflowText} size={size} />);
    const overflowTextElement = screen.getByText(overflowText);
    expect(overflowTextElement).toBeInTheDocument();
  });
});