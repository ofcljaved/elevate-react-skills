# Custom React Readme

This project explores the fundamentals of React, delving into its inner workings, rendering processes, and the concept of tree mapping.

## Key Takeaways

At its core, React is essentially JavaScript. Since web browsers inherently understand JavaScript, HTML, and CSS, React operates by transpiling into JavaScript behind the scenes, typically with the aid of compilers or transpilers such as Babel or Parcel. To integrate JavaScript into the code, a script tag is employed within HTML, as demonstrated below:

```html
<script type="module" src="/src/main.ts"></script>
```

Next, JavaScript dynamically generates and appends elements to pre-existing ones. The following HTML snippet designates the container element for all code insertion:

```html
<div id="root"></div>
```

This is all the HTML code necessary; our JavaScript is now seamlessly connected with the HTML document.

In JavaScript, we must access the primary container element where we intend to insert our elements. This is a fundamental concept shared with React:

```ts
const root = document.querySelector<HTMLDivElement>("#root")!;
```

React introduces an additional package, `react-dom`, responsible for rendering elements into the root container. To emulate this behavior, we created our custom rendering function:

```ts
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
```

This custom renderer expects the element to be rendered and the container where it should be placed.

In React, elements are typically created using the `createElement` function provided by the `react` library. To replicate this, we designed our custom React element tree:

```ts
const reactElement: ReactElement = {
  type: "a",
  props: {
    href: "https://www.google.com/",
    target: "_blank",
  },
  children: "Click me to go to Google",
};
```

In summary, this is how we constructed our custom implementation of React.

While React employs more intricate algorithms and code to manage elements, the core requirements are consistent—a renderer, a virtual DOM representing the element tree, and the main HTML container where all code is injected.

## Conclusion

This project was inspired by Hitesh Choudhary's instructional video, which provided valuable insights and a comprehensive understanding of React.

You can watch the video here: [Hitesh Choudhary's React Tutorial](https://youtu.be/kAOuj6o7Kxs?si=2BpW9sASqtyrmf_N).
