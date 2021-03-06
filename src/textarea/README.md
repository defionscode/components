# Textarea

The `Textarea` component creates a text area.

## Demo

<div class="example">
  <div class="header">Example</div>
  <div class="content">
  <tonic-textarea label="Text Area" rows="6" placeholder="Type in me">It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way—in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.</tonic-textarea>
  </div>
</div>

## Code

#### Html
```html
<tonic-textarea
  placeholder="Placeholder"
  rows="6"
  label="Text Area">
  <!-- Content Goes Here -->
</tonic-textarea>
```

## Api

### Properties

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| `id` | *string* | Text area with `id` attribute. | |
| `name` | *string* | Text area with `name` attribute. | |
| `placeholder` | *string* | Add placeholder to text area. |  |
| `spellcheck` | *boolean* | Enable spellcheck. | `true` |
| `disabled` | *boolean* | Text area with `disabled` attribute. | `false` |
| `required` | *boolean* | Set text area to `required`. | `false` |
| `readonly` | *boolean* | Set text area to `readonly`. | `false` |
| `autofocus` | *boolean* | Enable `autofocus` on the text area. | `false` |
| `resize` | *string* | Set to `none` to disable resize. | |
| `rows` | *string* | Set number of rows. |  |
| `cols` | *string* | Set number of columns. |  |
| `minlength` | *string* | Set the minimum character length. |  |
| `maxlength` | *string* | Set the maximum character length. |  |
| `width` | *string* | Set width of text area. |  |
| `height` | *string* | Set height of text area. | `100%` |
| `radius` | *string* | Set radius of text area. | `2px` |
| `tabindex` | *number* | Add a `tabindex` for the text area. | |
| `theme` | *string* | Adds a theme color (`light`, `dark` or whatever is defined in your base CSS. | `light` |

### Instance Methods & Members

| Method | Description |
| :--- | :--- |
| `value` | A getter/setter that provides the current value of the text area from inside of the component. |
