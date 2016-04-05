#!/usr/bin/env node
var path = require( 'path' )
var fs = require( 'fs' )
var util = require( 'util' )
var bencode = require( '..' )

var argv = process.argv.slice( 2 )
var filename = path.resolve( process.cwd(), argv.shift() )
var file = fs.readFileSync( filename )
var result = bencode.decode( file )
var json = JSON.stringify( result )

// TODO: CLI commands & options
// --encode: encode input
// --decode: decode input
// --inspect: output as formatted object (util.inspect)

process.stdout.write( json )
