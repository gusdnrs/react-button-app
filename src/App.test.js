import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('the Counter starts at 0', () => {
  render(<App />);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(0);
});

test('minus button has correct text', () => {
  render(<App />);

  const minusButton = screen.getByTestId('minus-button');
  expect(minusButton).toHaveTextContent('-');
});

test('plus button has correct text', () => {
  render(<App />);

  const plusButton = screen.getByTestId('plus-button');
  expect(plusButton).toHaveTextContent('+');
});

test('when the minus button is pressed, the counter changes to -1', () => {
  render(<App />);

  const minusButton = screen.getByTestId('minus-button');
  fireEvent.click(minusButton);

  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(1);
});

test('when the plus button is pressed, the counter changes to 1', () => {
  render(<App />);

  const plusButton = screen.getByTestId('plus-button');
  fireEvent.click(plusButton);

  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(1);
});

test('on/off button has blue color', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('on/off-button');
  expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' });
});

test('prevent the -,+ button from working when the on/off button is clicked', () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId('on/off-button');
  fireEvent.click(onOffButtonElement);
  const plusButton = screen.getByTestId('plus-button');
  const minusButton = screen.getByTestId('minus-button');
  expect(plusButton).toBeDisabled();
  expect(minusButton).toBeDisabled();
});
