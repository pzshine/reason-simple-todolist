'use strict';


var reasonReactBlue = "#48a9dc";

var style = "\n  body {\n    background-color: rgb(224, 226, 229);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  button {\n    background-color: white;\n    color: " + reasonReactBlue + ";\n    border: 1px solid " + reasonReactBlue + ";\n    padding: 8px;\n    font-size: 16px;\n    transition: .3s;\n    cursor: pointer;\n    margin-left: 5px;\n  }\n  button:active,\n  button:hover {\n    background-color: " + reasonReactBlue + ";\n    color: white;\n  }\n  .container {\n    margin: 12px 0px;\n    box-shadow: 0px 4px 16px rgb(200, 200, 200);\n    width: 100%;\n    max-width: 900px;\n    border-radius: 12px;\n    font-family: sans-serif;\n  }\n  .containerTitle {\n    background-color: #f0f0f0;\n    border-radius: 5px 5px 0px 0px;\n    padding: 12px;\n    font-weight: bold;\n  }\n  .containerContent {\n    background-color: white;\n    padding: 30px 20px;\n    border-radius: 0px 0px 5px 5px;\n  }\n  .todoForm {\n    display: flex;\n    justify-content: center;\n  }\n  .todoForm > input {\n    flex: 1 1 80%;\n    padding: 10px;\n  }\n  .todoForm > button {\n    flex: 0 0 20%;\n  }\n  .listContainer {\n    list-style: none;\n    margin: 20px auto;\n    padding: 0;\n  }\n  .listContainer > li {\n      border: 1px solid #f0f0f0;\n      padding: 10px;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n  }\n  .listContainer > li + li {\n    margin-top: 10px;\n  }\n  .listContainer > li > button {\n    background-color: #cb0000;\n    border-color: #cb0000;\n    color: #fff;\n    font-size: 13px;\n  }\n\n";

exports.reasonReactBlue = reasonReactBlue;
exports.style = style;
/* No side effect */
