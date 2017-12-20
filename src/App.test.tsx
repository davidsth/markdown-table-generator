import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Table } from './model/Table'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
})

describe('table', () => {

  const table = new Table(3, 3)
  it('creates a table with rows and columns', () => {
    expect(table.row).toBe(3)
    expect(table.column).toBe(3)
  })
})
