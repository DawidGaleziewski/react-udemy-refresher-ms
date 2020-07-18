# statful components

No matter is component uses useState hooks or is class component if it uses state we call it stateful component.
Those are also called 'smart' or 'container' components
You only want to have a couple of those

# stateless component

Component that does not chandle state should be a function. It is good practice to create as many statless components as possible.
Statless components are also called 'dumb' or 'presentation' components

# Stateless over statful

We should have more statless component. Due to this fact the app is easier to manage as we know exatctly where the logic of our app comes from. The smart component is in one place and distributes the data across the app making it easier to find it and change it if there is a need to.
