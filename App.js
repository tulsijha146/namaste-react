

// {/* <div id="parent">
//     <div id="child"> 
//         <h1>This is h1</h1>
//         <h2>This is h2</h2>
//     </div>
// /* 
//     <div id="child2"> 
//         <h1>This is h1</h1>
//         <h2>This is h2</h2>
//     </div>
// </div>}}*/
//ReactElement(Object)=>HTML(Browser understand)


const parent=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},[React.createElement("h1",{},"I'm an h1 tag!")],React.createElement("h2",{},"I'm an h2 tag!"))],
React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I'm an h1 tag!"),React.createElement("h2",{},"I'm an h2 tag!")]
));

// const heading=React.createElement("h1",{id:"heading"},"Hello world from react!");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

console.log(parent);