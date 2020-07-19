let reasonReactBlue = "#48a9dc";

// The {j|...|j} feature is just string interpolation, from
// bucklescript.github.io/docs/en/interop-cheatsheet#string-unicode-interpolation
// This allows us to conveniently write CSS, together with variables, by
// constructing a string
let style = {j|
  body {
    background-color: rgb(224, 226, 229);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    background-color: white;
    color: $reasonReactBlue;
    border: 1px solid $reasonReactBlue;
    padding: 8px;
    font-size: 16px;
    transition: .3s;
    cursor: pointer;
    margin-left: 5px;
  }
  button:active,
  button:hover {
    background-color: $reasonReactBlue;
    color: white;
  }
  .container {
    margin: 12px 0px;
    box-shadow: 0px 4px 16px rgb(200, 200, 200);
    width: 100%;
    max-width: 900px;
    border-radius: 12px;
    font-family: sans-serif;
  }
  .containerTitle {
    background-color: #f0f0f0;
    border-radius: 5px 5px 0px 0px;
    padding: 12px;
    font-weight: bold;
  }
  .containerContent {
    background-color: white;
    padding: 30px 20px;
    border-radius: 0px 0px 5px 5px;
  }
  .todoForm {
    display: flex;
    justify-content: center;
  }
  .todoForm > input {
    flex: 1 1 80%;
    padding: 10px;
  }
  .todoForm > button {
    flex: 0 0 20%;
  }
  .listContainer {
    list-style: none;
    margin: 20px auto;
    padding: 0;
  }
  .listContainer > li {
      border: 1px solid #f0f0f0;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .listContainer > li + li {
    margin-top: 10px;
  }
  .listContainer > li > button {
    background-color: #cb0000;
    border-color: #cb0000;
    color: #fff;
    font-size: 13px;
  }

|j};
