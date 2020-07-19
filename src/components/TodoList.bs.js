'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");

var initialState = {
  id: 1,
  todos: /* [] */0
};

function reduce(state, text) {
  if (!text.TAG) {
    return {
            id: state.id + 1 | 0,
            todos: {
              hd: [
                state.id,
                text._0
              ],
              tl: state.todos
            }
          };
  }
  var id = text._0;
  return {
          id: state.id,
          todos: Belt_List.filter(state.todos, (function (param) {
                  return param[0] !== id;
                }))
        };
}

function TodoList(Props) {
  var match = React.useReducer(reduce, initialState);
  var dispatch = match[1];
  var match$1 = React.useState(function () {
        return "";
      });
  var setCurrentInput = match$1[1];
  var currentInput = match$1[0];
  var todos = match[0].todos;
  return React.createElement("div", {
              className: "todoContainer"
            }, React.createElement("div", {
                  className: "todoForm"
                }, React.createElement("input", {
                      placeholder: "What do you want to do today?",
                      value: currentInput,
                      onChange: (function (e) {
                          var input = e.target.value;
                          return Curry._1(setCurrentInput, (function (param) {
                                        return input;
                                      }));
                        })
                    }), React.createElement("button", {
                      onClick: (function (param) {
                          Curry._1(dispatch, {
                                TAG: /* Add */0,
                                _0: currentInput
                              });
                          return Curry._1(setCurrentInput, (function (param) {
                                        return "";
                                      }));
                        })
                    }, "Add Todo")), React.createElement("ul", {
                  className: "listContainer"
                }, Belt_List.toArray(Belt_List.map(todos, (function (param) {
                            var id = param[0];
                            return React.createElement("li", undefined, React.createElement("span", {
                                            className: "todoText"
                                          }, param[1]), React.createElement("button", {
                                            onClick: (function (param) {
                                                return Curry._1(dispatch, {
                                                            TAG: /* Remove */1,
                                                            _0: id
                                                          });
                                              })
                                          }, "Remove"));
                          })))));
}

var make = TodoList;

exports.initialState = initialState;
exports.reduce = reduce;
exports.make = make;
/* react Not a pure module */
