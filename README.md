<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# log1p

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the [natural logarithm][@stdlib/math/base/special/ln] of `1+x`.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-log1p
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var log1p = require( '@stdlib/math-base-special-log1p' );
```

#### log1p( x )

Evaluates the [natural logarithm][@stdlib/math/base/special/ln] of `1+x`.

```javascript
var v = log1p( 4.0 );
// returns ~1.609

v = log1p( -1.0 );
// returns -Infinity

v = log1p( Infinity );
// returns Infinity

v = log1p( 0.0 );
// returns 0.0

v = log1p( -0.0 );
// returns -0.0

v = log1p( NaN );
// returns NaN
```

For `x < -1`, the function returns `NaN`, as the [natural logarithm][@stdlib/math/base/special/ln] is **not** defined for negative numbers.

```javascript
var v = log1p( -2.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var log1p = require( '@stdlib/math-base-special-log1p' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu() * 100.0 );
    console.log( log1p( x ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/ln`][@stdlib/math/base/special/ln]</span><span class="delimiter">: </span><span class="description">natural logarithm.</span>
-   <span class="package-name">[`@stdlib/math/base/special/log`][@stdlib/math/base/special/log]</span><span class="delimiter">: </span><span class="description">base `b` logarithm.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-log1p.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-log1p

[test-image]: https://github.com/stdlib-js/math-base-special-log1p/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-log1p/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-log1p/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-log1p?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-log1p.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-log1p/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-log1p/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-log1p/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-log1p/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-log1p/blob/main/branches.md

<!-- <related-links> -->

[@stdlib/math/base/special/ln]: https://github.com/stdlib-js/math-base-special-ln

[@stdlib/math/base/special/log]: https://github.com/stdlib-js/math-base-special-log

<!-- </related-links> -->

</section>

<!-- /.links -->
