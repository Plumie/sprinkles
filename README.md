# Sprinkles
Micro library for creating particles animations

## Build

```sh
$ npm install
$ npm run build
```

## Usage

```html
<script src="sprinkles.min.js"></script>
```
After importing Sprinkles, you can start using it by adding this code in your script tag :

```javascript
let instance = new Sprinkles('[data-ref="sprinkles"]', {
  content: ['✨'],
  amount: 10,
  distance: 100,
});
```

## Warning, this project is NOT production ready, use it at your own risk
