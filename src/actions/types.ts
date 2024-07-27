import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  fetchTodos,
  deletetodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
