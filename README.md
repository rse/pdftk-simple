
PDFTk-Simple
============

[PDFTk](https://gitlab.com/pdftk-java/pdftk) for Node.js

<p/>
<img src="https://nodei.co/npm/pdftk-simple.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/pdftk-simple.png" alt=""/>

About
-----

This is a small JavaScript library for use in Node.js
environments, providing the possibility to run the Java-based
[PDFTk](https://gitlab.com/pdftk-java/pdftk) tool from within a
JavaScript API.

NOTICE
------

The PDFTk is written in [Java](https://java.com/)
and hence this Node.js modules requires an installed `java`
executable in the environment.

Installation
------------

```shell
$ npm install pdftk-simple
```

Usage
-----

```js
(async () => {
    const PDFTk = require("pdftk")
    const pdftk = new PDFTk()
    await pdftk.exec("multibackground", "foo.pdf", "bar.pdf")
})().catch((err) => {
    console.log(`ERROR: ${err}`)
})
```

Motivation
----------

The major differences of [pdftk-simple](http://npmjs.com/pdftk-simple)
to similar NPM modules and the motivation for the existence of
[pdftk-simple](http://npmjs.com/pdftk-simple) is that, in contrast to
other approaches, it does not need a pre-installed PDFTk. Instead, it
automatically downloads and locally installs the PDFTk distribution on
`npm install` and uses the plain java(1) command to execute it.

Latest pre-build PDFTk distributions can always be found under the
[PDFTk CI/CD Jobs](https://gitlab.com/pdftk-java/pdftk/-/jobs). You can
download a newer `pdftk-all.jar` manually and use the pdftk-simpe API
option `pdftk` to specify the path to your particular JAR file.

License
-------

Copyright (c) 2020-2021 Dr. Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

