Latcarf
=======

_Try it online_ [@ catseye.tc](https://catseye.tc/installation/Latcarf)
| _See also:_ [Maze Clouds](https://github.com/catseye/Maze-Clouds#readme)
∘ [Erratic Turtle Graphics](https://github.com/catseye/Erratic-Turtle-Graphics#readme)

![screenshot](images/latcarf1.png?raw=true)

This is a gewgaw from an idea I had in early 2018, which was this:

Most recursive fractals (such as the [Koch snowflake][]) are developed
top-down; you start with a large shape, and then you say it is
made up of smaller shapes similar to the first shape, and those
smaller shapes are made up of even smaller shapes, and so forth.

But what happens if you try to develop a fractal the other way around —
bottom-up?  You start with some small shapes, then you connect them
into larger shapes, and connect those into even larger shapes...

Latcarf was an attempt to implement a bottom-up fractal such as this.

The first implementation of Latcarf (which we will call version 1.0) was
located in the [HTML5 Gewgaws distribution][].  This version was cleaned
up and adapted to use [DAM][], and that is the version in this repository
(which we will call version 1.1 or later).

[HTML5 Gewgaws distribution]: https://catseye.tc/distribution/HTML5%20Gewgaws%20distribution
[DAM]: https://catseye.tc/node/DAM
[Koch snowflake]: https://en.wikipedia.org/wiki/Koch_snowflake
