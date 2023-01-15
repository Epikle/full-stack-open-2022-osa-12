import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Todo from './Todo';

describe('Todo.js', () => {
  const initTodo = [
    {
      _id: '123',
      text: 'Todo text',
      done: false,
    },
    {
      _id: '1234',
      text: 'Todo text 2',
      done: true,
    },
  ];

  it('Should render a Todo with with text and Delete and done buttons', () => {
    render(
      <Todo
        deleteTodo={() => null}
        completeTodo={() => null}
        todo={initTodo[0]}
      />
    );

    const todoText = screen.queryByText(initTodo[0].text);
    const delBtnText = screen.queryByText('Delete');
    const doneBtnText = screen.queryByText('Set as done');

    expect(todoText).toBeInTheDocument();
    expect(delBtnText).toBeInTheDocument();
    expect(doneBtnText).toBeInTheDocument();
  });

  it('Should render a Todo with with text and Delete button', () => {
    render(
      <Todo
        deleteTodo={() => null}
        completeTodo={() => null}
        todo={initTodo[1]}
      />
    );

    const todoText = screen.queryByText(initTodo[1].text);
    const delBtnText = screen.queryByText('Delete');
    const doneBtnText = screen.queryByText('Set as done');

    expect(todoText).toBeInTheDocument();
    expect(delBtnText).toBeInTheDocument();
    expect(doneBtnText).not.toBeInTheDocument();
  });

  it('Should render a Todo with delete btn and it should be called once', () => {
    const deleteTodo = jest.fn();

    render(
      <Todo
        deleteTodo={deleteTodo}
        completeTodo={() => null}
        todo={initTodo[0]}
      />
    );

    screen.getByText(initTodo[0].text);
    const delBtnText = screen.getByText('Delete');

    userEvent.click(delBtnText);

    expect(deleteTodo).toHaveBeenCalledTimes(1);
  });
});
