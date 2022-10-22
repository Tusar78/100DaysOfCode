## What is Conditional Rendering?
While developing an application in React or any other JS library/ framework, it is an everyday use case to show or hide elements based on certain conditions. It can be a simple user interaction – say, we need to show a popup when a user clicks a certain button and hide it when (s)he clicks the cross icon. To quote another example, think authentication – we make a ‘log out’ button visible when (s)he is logged in and make the ‘Login/Sign up form visual for the opposite situation. This process of executing logic or rendering UI elements basis certain conditions is called conditional rendering.

## Why do we need to list & key in react?
Keys help React identify which items have changed, are added, or are removed.

## Controlled vs Uncontrolled Component?
In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself. To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.