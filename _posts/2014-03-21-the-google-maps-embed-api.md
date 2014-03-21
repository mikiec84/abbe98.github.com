---
layout: post
title: The Google Maps Embed API
description: The relaunched Google Maps Embed API explained with examples.
image: http://abbe98.github.io/assets/default.png
---
In January Google relaunched [The Google Maps Embed API][1], I haven't been using Google Maps for over a year nut I needed to try this out. Google says "There are no usage limits for the Maps Embed API." but that isn't true, the limit is "2,000,000 requests/day" so please keep reloading this page. You can't use your own data or maps with the API, so if you would like to show a place on the map you need to add it through Google Maps. Google probably hopes that this will improve their own place/business data. Google got a great [tool for creating these maps][2]. Note that you need a API key.

Basic Map,

<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyAvypzfb14Io_hhtI9EA1oDAjjv4DUBQvw&zoom=16&center=59.0673%2C16.3582" style="display:block; margin: 0 auto;">&nbsp;</iframe>

Basic Map(Satellite),

<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyAvypzfb14Io_hhtI9EA1oDAjjv4DUBQvw&zoom=16&center=59.0673%2C16.3582&maptype=satellite" style="display:block; margin: 0 auto;">&nbsp;</iframe>

Place Map,

<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=Katrineholm%2C%20Sweden&key=AIzaSyAvypzfb14Io_hhtI9EA1oDAjjv4DUBQvw" style="display:block; margin: 0 auto;">&nbsp;</iframe>

Search Map(museums near Stockholm),

<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?q=museum%20near%20Stockholm%2C%20Sweden&key=AIzaSyAvypzfb14Io_hhtI9EA1oDAjjv4DUBQvw" style="display:block; margin: 0 auto;">&nbsp;</iframe>

Directions Map,

<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/directions?origin=Katrineholm%2C%20Sweden&destination=Flodafors%2C%20Sweden&key=AIzaSyAvypzfb14Io_hhtI9EA1oDAjjv4DUBQvw" style="display:block; margin: 0 auto;">&nbsp;</iframe>

That bus line is really weird and does not exist.

[1]: https://developers.google.com/maps/documentation/embed/
[2]: https://developers.google.com/maps/documentation/embed/start
