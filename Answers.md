1. What problem does the context API help solve?
It helps us by avoiding a large amount of prop drilling.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
An Action is a command sent to your reducer to update the state in a specific way. Reducers are pure functions that update the store's state. The store is an object where the props are stored. The store is the single source of truth because it is immuttable and a new object of the state is created when the state is updated.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Your application state is global, and your component state is local. It would be good to use application state when you have a project that is massive.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk allows are dispatchers to become async. We are able to use axios within our action creators.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
Redux! It is a somewhat simple (as far as we have learned) after you understand the basics.
