import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {

  test('renders the TodoList component with initial todos', () => {
    render(<TodoList />);
    
    // Check if the TodoList heading is rendered
    const heading = screen.getByText(/Todo List/i);
    expect(heading).toBeInTheDocument();

    // Check if the initial todos are rendered
    const todoItem = screen.getByText(/Learn React/i);
    expect(todoItem).toBeInTheDocument();
  });

  test('can add a new todo item', () => {
    render(<TodoList />);
  
    // Simulate the click on the "Add Todo" button
    const addButton = screen.getByText(/Add Todo/i);
    fireEvent.click(addButton);
  
    // Verify that the new todo item appears in the list
    const newTodo = screen.getByText(/New Todo/i);
    expect(newTodo).toBeInTheDocument();
  });
  

  test('can toggle a todo item between completed and not completed', () => {
    render(<TodoList />);
  
    // Find the "Learn React" todo item and click to toggle completion
    const todoItem = screen.getByText(/Learn React/i);
    fireEvent.click(todoItem);
  
    // Verify that the todo item has been marked as completed (strikethrough)
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  
    // Click again to toggle back to not completed
    fireEvent.click(todoItem);
  
    // Verify that the todo item is no longer struck through
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });
  

  test('can delete a todo item', () => {
    render(<TodoList />);
  
    // Find and click the delete button for the "Learn React" todo
    const deleteButton = screen.getByText(/Delete/i);
    fireEvent.click(deleteButton);
  
    // Verify that the todo item is removed from the list
    const todoItem = screen.queryByText(/Learn React/i);
    expect(todoItem).not.toBeInTheDocument();
  });
  
});
