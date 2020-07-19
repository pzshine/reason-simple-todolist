
type state = {
  id: int,
  todos: list((int, string)),
};

type action =
  | Add(string)
  | Remove(int);

let initialState = {id: 1, todos: []};

let reduce = state =>
  fun
  | Add(text) => {id: state.id + 1, todos: [(state.id, text), ...state.todos]}
  | Remove(id) => {id: state.id, todos: Belt.List.filter(state.todos, ((uid, _)) => uid != id)};

[@react.component]

let make = () => {
  let (state, dispatch) = React.useReducer(reduce, initialState);
  let (currentInput, setCurrentInput) = React.useState(_ => "");

  let todos = state.todos;

  <div className="todoContainer">
    <div className="todoForm">
        <input
          placeholder="What do you want to do today?"
          value=currentInput
          onChange={e => {
            let input = ReactEvent.Form.target(e)##value;
            setCurrentInput(_ => input);
          }}
        />
        <button
          onClick={_ => {
            dispatch(Add(currentInput));
            setCurrentInput(_ => "");
          }}>
          {"Add Todo" |> React.string}
        </button>
    </div>
    <ul className="listContainer">
      { Belt.List.map(todos, ((id, text)) =>
         <li>
           <span className="todoText">{text |> React.string}</span>
           <button onClick={_ => dispatch(Remove(id))}> {"Remove" |> React.string} </button>
         </li>
       )
       |> Belt.List.toArray
       |> React.array }
    </ul>
  </div>;
};