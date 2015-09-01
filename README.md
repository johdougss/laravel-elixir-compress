## Usage

This is a simple wrapper around Laravel Elixir. Add it to your Elixir-enhanced Gulpfile, like so:

```
var elixir = require('laravel-elixir');

require('laravel-elixir-compress');

elixir(function(mix) {
   mix.compress();
});
```
