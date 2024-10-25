const heading = React.createElement(
  "h1",
  { id: "parent" },
  [React.createElement("p", {id : "child1"}, "I'm a child1"),
    React.createElement("p", {id : "child2"}, "I'm a child2")
  ]
  
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
