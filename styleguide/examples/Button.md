`Button` is used to trigger an action or event, such as submitting a form, opening a modal, canceling an action, or performing a delete operation.

### Solid buttons

```jsx
<Stack direction="row" spacing=".5rem" shouldWrapChildren>
    <Button>Default</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="success">Success</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="info">Info</Button>
    <Button variant="light">Light</Button>
    <Button variant="dark">Dark</Button>
    <Button variant="link">Link</Button>
</Stack>
```

### Outline buttons

```jsx
<Stack direction="row" spacing=".5rem" shouldWrapChildren>
    <Button outline>Default</Button>
    <Button outline variant="primary">Primary</Button>
    <Button outline variant="secondary">Secondary</Button>
    <Button outline variant="success">Success</Button>
    <Button outline variant="danger">Danger</Button>
    <Button outline variant="warning">Warning</Button>
    <Button outline variant="info">Info</Button>
    <Button outline variant="light">Light</Button>
    <Button outline variant="dark">Dark</Button>
</Stack>
```

### Sizes

Defaults to medium button if not specified.

#### Large buttons

```jsx
<Stack direction="row" spacing=".5rem" shouldWrapChildren>
    <Button size="lg" variant="primary">Large button</Button>
    <Button size="lg" variant="secondary">Large button</Button>
</Stack>
```

```jsx
<Stack direction="row" spacing=".5rem" shouldWrapChildren>
    <Button size="lg"><i className="fas fa-table" /></Button>
    <Button size="lg" variant="primary"><i className="fas fa-table" /></Button>
    <Button size="lg" variant="secondary"><i className="fas fa-table" /></Button>
    <Button size="lg" variant="success"><i className="fas fa-table" /></Button>
    <Button size="lg" variant="danger"><i className="fas fa-table" /></Button>
    <Button size="lg" variant="warning"><i className="fas fa-table" /></Button>
    <Button size="lg" variant="info"><i className="fas fa-table" /></Button>
    <Button size="lg" variant="light"><i className="fas fa-table" /></Button>
    <Button size="lg" variant="dark"><i className="fas fa-table" /></Button>
</Stack>
```

#### Medium buttons

```jsx
<Stack direction="row" spacing=".5rem" shouldWrapChildren>
    <Button size="md" variant="primary">Default button</Button>
    <Button size="md" variant="secondary">Default button</Button>
</Stack>
```

```jsx
<Stack direction="row" spacing=".5rem" shouldWrapChildren>
    <Button size="md"><i className="fas fa-table" /></Button>
    <Button size="md" variant="primary"><i className="fas fa-table" /></Button>
    <Button size="md" variant="secondary"><i className="fas fa-table" /></Button>
    <Button size="md" variant="success"><i className="fas fa-table" /></Button>
    <Button size="md" variant="danger"><i className="fas fa-table" /></Button>
    <Button size="md" variant="warning"><i className="fas fa-table" /></Button>
    <Button size="md" variant="info"><i className="fas fa-table" /></Button>
    <Button size="md" variant="light"><i className="fas fa-table" /></Button>
    <Button size="md" variant="dark"><i className="fas fa-table" /></Button>
</Stack>
```

#### Small buttons

```jsx
<Stack direction="row" spacing=".5rem" shouldWrapChildren>
    <Button size="sm" variant="primary">Small button</Button>
    <Button size="sm" variant="secondary">Small button</Button>
</Stack>
```

```jsx
<Stack direction="row" spacing=".5rem" shouldWrapChildren>
    <Button size="sm"><i className="fas fa-table" /></Button>
    <Button size="sm" variant="primary"><i className="fas fa-table" /></Button>
    <Button size="sm" variant="secondary"><i className="fas fa-table" /></Button>
    <Button size="sm" variant="success"><i className="fas fa-table" /></Button>
    <Button size="sm" variant="danger"><i className="fas fa-table" /></Button>
    <Button size="sm" variant="warning"><i className="fas fa-table" /></Button>
    <Button size="sm" variant="info"><i className="fas fa-table" /></Button>
    <Button size="sm" variant="light"><i className="fas fa-table" /></Button>
    <Button size="sm" variant="dark"><i className="fas fa-table" /></Button>
</Stack>
```

#### Extra small buttons

```jsx
<Stack direction="row" spacing=".5rem" shouldWrapChildren>
    <Button size="xs" variant="primary">Extra size="sm"all button</Button>
    <Button size="xs" variant="secondary">Extra size="sm"all button</Button>
</Stack>
```

```jsx
<Stack direction="row" spacing=".5rem" shouldWrapChildren>
    <Button size="xs"><i className="fas fa-table" /></Button>
    <Button size="xs" variant="primary"><i className="fas fa-table" /></Button>
    <Button size="xs" variant="secondary"><i className="fas fa-table" /></Button>
    <Button size="xs" variant="success"><i className="fas fa-table" /></Button>
    <Button size="xs" variant="danger"><i className="fas fa-table" /></Button>
    <Button size="xs" variant="warning"><i className="fas fa-table" /></Button>
    <Button size="xs" variant="info"><i className="fas fa-table" /></Button>
    <Button size="xs" variant="light"><i className="fas fa-table" /></Button>
    <Button size="xs" variant="dark"><i className="fas fa-table" /></Button>
</Stack>
```

### Block level buttons

```jsx
<Stack direction="column" spacing="1rem" shouldWrapChildren>
    <Button block size="lg" variant="primary">Block level button</Button>
    <Button block size="lg" variant="secondary">Block level button</Button>
</Stack>
```

### States

#### Default state

```jsx
<Stack direction="row" spacing=".5rem" shouldWrapChildren>
    <Button variant="primary">Default</Button>
    <Button variant="secondary">Default</Button>
</Stack>
```

#### Hover state

```jsx
<Stack direction="row" spacing=".5rem" shouldWrapChildren>
    <Button hover variant="primary">Hover</Button>
    <Button hover variant="secondary">Hover</Button>
</Stack>
```

#### Active state

```jsx
<Stack direction="row" spacing=".5rem" shouldWrapChildren>
    <Button active variant="primary">Active</Button>
    <Button active variant="secondary">Active</Button>
</Stack>
```

#### Focus state

```jsx
<Stack direction="row" spacing=".5rem" shouldWrapChildren>
    <Button focus variant="primary">Focus</Button>
    <Button focus variant="secondary">Focus</Button>
</Stack>
```

#### Disabled state

```jsx
<Stack direction="row" spacing=".5rem" shouldWrapChildren>
    <Button disabled variant="primary">Disabled</Button>
    <Button disabled variant="secondary">Disabled</Button>
</Stack>
```
