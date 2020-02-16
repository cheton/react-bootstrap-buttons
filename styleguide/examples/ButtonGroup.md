`ButtonGroup` is used to group related buttons.

### Basic usage

```jsx
<ButtonGroup>
    <Button active>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
</ButtonGroup>
<ButtonGroup style={{ marginLeft: '.5rem' }}>
    <Button><i className="fas fa-home" /></Button>
    <Button><i className="fas fa-envelope" /></Button>
</ButtonGroup>
```

### Sizing

Defaults to medium button group if not specified.

#### Large button group

```jsx
<ButtonGroup size="lg" variant="secondary">
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
</ButtonGroup>
```

#### Medium button group

```jsx
<ButtonGroup size="md" variant="secondary">
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
</ButtonGroup>
```

#### Small button group

```jsx
<ButtonGroup size="sm" variant="secondary">
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
</ButtonGroup>
```

#### Extra small button group

```jsx
<ButtonGroup size="xs" variant="secondary">
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
</ButtonGroup>
```

### Vertical variation

```jsx
<ButtonGroup vertical variant="secondary">
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
</ButtonGroup>
```
