# FabricatingComp

Testing how factories can be beneficial for components classification and explicit importing data from a global state by injecting it with a wrapper via props.

This can help avoid multiple checks to make typescript happy if for example we have some part of the application that an user has to be with logged in data.

Example:

```tsx
function SomeAuthenticatedComponent() {
    const { user } = useGlobalState();

    if (!user) {
        return <div>Not authenticated</div>;
    }

    return <div>{user.name}</div>;
}
```

Usually we have to check or just ignore the possibility of some data not being available in each authenticated component.

But if we create a factory for this we can avoid this type of checks by injecting with props

```tsx
const SomeAuthenticatedComponent = createAuthComponent<{ title: string }>(
    function SomeAuthenticatedComponent({ user, title }) {
        return (
            <div>
                <h1>{title}</h1>
                <p>{user.name}</p>
            </div>
        );
    }
);
```

### This is just a test.
