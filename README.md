# confirm-the-submit

## Requirements

- jQuery

## Installation

```shell
npm i confirm-the-submit
```

```node
require('confirm-the-submit')
```

## Usage

```html
<form id="form" method="POST">
    <input type="submit" id="basic" data-message="Are you sure?" data-target="form" value="Basic Sample">
</form>
```

```js
$('#basic').confirmTheSubmit();
```

### Options

```html
<form id="form" method="POST">
    <input type="submit" id="attribute_option" data-field1="Are you sure?" data-field2="form" value="Options Sample">
</form>
```

```js
$('#attribute_option').confirmTheSubmit({
    message_attr: 'field1',
    target_attr: 'field2'
});
```
