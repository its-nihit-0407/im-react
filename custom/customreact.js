function renderElement(reactELement, container){
    /* => Static Optimal Solution
    const reactcreate = document.createElement(reactELement.type)

    reactcreate.innerHTML = reactELement.children
    reactcreate.setAttribute("href", reactELement.props.href)
    reactcreate.setAttribute("target", reactELement.props.target)

    container.appendChild(reactcreate)
    */
   const reactcreate = document.createElement(reactELement.type);

   reactcreate.innerHTML = reactELement.children;
   
   for (let prop in reactELement.props){
        if (prop === "children") continue;
        reactcreate.setAttribute(prop, reactELement.props[prop]);
   }

   container.appendChild(reactcreate);

};

const reactELement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Click here to visit google", 
}

const maincontainer = document.querySelector("#root");

renderElement(reactELement, maincontainer);