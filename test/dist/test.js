/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var isNegativeZero = require( '@stdlib/math-base-assert-is-negative-zero' );
var abs = require( '@stdlib/math-base-special-abs' );
var ln = require( '@stdlib/math-base-special-ln' );
var incrspace = require( '@stdlib/array-base-incrspace' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var log1p = require( './../../dist' );


// FIXTURES //

var mediumNegative = require( './../..xtures/julia/medium_negative.json' );
var mediumPositive = require( './../..xtures/julia/medium_positive.json' );
var smallNegative = require( './../..xtures/julia/small_negative.json' );
var smallPositive = require( './../..xtures/julia/small_positive.json' );
var largeNegative = require( './../..xtures/julia/large_negative.json' );
var largePositive = require( './../..xtures/julia/large_positive.json' );
var bigPositive = require( './../..xtures/julia/big_positive.json' );
var hugePositive = require( './../..xtures/julia/huge_positive.json' );
var tinyNegative = require( './../..xtures/julia/tiny_negative.json' );
var tinyPositive = require( './../..xtures/julia/tiny_positive.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof log1p, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function agrees with `ln(x+1)` for most `x`', function test( t ) {
	var expected;
	var delta;
	var val;
	var tol;
	var x;
	var y;
	var i;

	x = incrspace( -0.5, 1000.0, 0.5 );
	for ( i = 0; i < x.length; i++ ) {
		val = x[ i ];
		y = log1p( val );
		expected = ln( val + 1.0 );
		delta = abs( y - expected );
		tol = 1.0e-12 * abs( expected );
		t.ok( delta <= tol, 'within tolerance. x: ' + val + '. Value: ' + y + '. Expected: ' + expected + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function accurately computes `ln(x+1)` for negative medium numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var x;
	var i;

	x = mediumNegative.x;
	expected = mediumNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = log1p( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function accurately computes `ln(x+1)` for positive medium numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var x;
	var i;

	x = mediumPositive.x;
	expected = mediumPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = log1p( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function accurately computes `ln(x+1)` for negative small numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var x;
	var i;

	x = smallNegative.x;
	expected = smallNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = log1p( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function accurately computes `ln(x+1)` for positive small numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var x;
	var i;

	x = smallPositive.x;
	expected = smallPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = log1p( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function accurately computes `ln(x+1)` for negative tiny numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var x;
	var i;

	x = tinyNegative.x;
	expected = tinyNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = log1p( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function accurately computes `ln(x+1)` for positive tiny numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var x;
	var i;

	x = tinyPositive.x;
	expected = tinyPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = log1p( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function accurately computes `ln(x+1)` for negative large numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var x;
	var i;

	x = largeNegative.x;
	expected = largeNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = log1p( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function accurately computes `ln(x+1)` for positive large numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var x;
	var i;

	x = largePositive.x;
	expected = largePositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = log1p( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function accurately computes `ln(x+1)` for positive big numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var x;
	var i;

	x = bigPositive.x;
	expected = bigPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = log1p( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function accurately computes `ln(x+1)` for positive huge numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var x;
	var i;

	x = hugePositive.x;
	expected = hugePositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = log1p( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function returns `-infinity` if provided `-1`', function test( t ) {
	t.equal( log1p( -1.0 ), NINF, 'equals -infinity' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', function test( t ) {
	t.equal( log1p( PINF ), PINF, 'equals +infinity' );
	t.end();
});

tape( 'the function returns `NaN` if provided a number smaller than -1', function test( t ) {
	var val;

	val = log1p( -2.0 );
	t.equal( isnan( val ), true, 'returns NaN' );

	val = log1p( NINF );
	t.equal( isnan( val ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var val = log1p( NaN );
	t.equal( isnan( val ), true, 'returns NaN' );
	t.end();
});

tape( 'the function returns `0` if provided `+0`', function test( t ) {
	t.equal( log1p( +0.0 ), 0.0, 'equals 0' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0` (IEEE 754-2008)', function test( t ) {
	t.equal( isNegativeZero( log1p( -0.0 ) ), true, 'returns -0' );
	t.end();
});