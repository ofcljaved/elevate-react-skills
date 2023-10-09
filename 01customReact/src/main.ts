function customRenderer(
  element: ReactElement,
  container: HTMLDivElement
): void {
  const domElement = document.createElement(element.type) as HTMLElement;
  domElement.innerHTML = element.children;
  for (const attr in element.props) {
    if (attr === "children") continue;
    const attrValue = element.props[attr];
    domElement.setAttribute(attr, attrValue);
  }
  container.appendChild(domElement);
}

const reactElement: ReactElement = {
  type: "a",
  props: {
    href: "https://www.google.com/",
    target: "_blank",
  },
  children: "Click me to go to google",
};

const root = document.querySelector<HTMLDivElement>("#root")!;

root && customRenderer(reactElement, root);
