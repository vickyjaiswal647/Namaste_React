const heading1 = React.createElement("h1", {}, "Hello India");
const heading2 = React.createElement("h2", {}, "Hello Vicky");
const container = React.createElement("div", {}, [heading1, heading2]);

//ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
 