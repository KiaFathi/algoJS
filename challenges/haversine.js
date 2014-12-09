/*
Description:

Ahoi!
We are on a big sailing boat off the coast of Croatia. The captain, by the name 
of Haversine, wants you to help him out: "Arrr, we need to know the distance 
between these two points on the map, so I know how long we need to wait before 
we get to our beloved treasure!". As this is the fourth of such requests by your 
captain, you decide to write a function to calculate the distance between two 
coordinates.

Complete the function so it returns the distance between two given coordinates. 
Examples of given coordinates are:

48° 12′ 30″ N, 16° 22′ 23″ E
23° 33′ 0″ S, 46° 38′ 0″ W
58° 18′ 0″ N, 134° 25′ 0″ W
33° 51′ 35″ S, 151° 12′ 40″ E

The returned distance should be in kilometers.
We think about the earth as a sphere with radius 6371 km.
As our captain has a good binocular and the fact, that we are lazy, we don't take 
precision too serious. So it is sufficient for the result to be precise to 10 km. 
Round to the lower 10 km. So 6387 becomes 6380, 643 becomes 640 and 18299 becomes 
18290.

You can expect the delivered coordinates to be valid.
The characters for minutes (′) and seconds (″) are not standard quotation marks. 
If you experience any encoding/escaping issues, you can get them as follows:

unescape("%B0"); // °
unescape("%u2032"); // ′
unescape("%u2033"); // ″


Examples of inputs and the expected outputs:

distance("48° 12′ 30″ N, 16° 22′ 23″ E", "23° 33′ 0″ S, 46° 38′ 0″ W");
// Returns 10130
distance("48° 12′ 30″ N, 16° 22′ 23″ E", "58° 18′ 0″ N, 134° 25′ 0″ W");
// Returns 7870
distance("48° 12′ 30″ N, 16° 22′ 23″ E", "48° 12′ 30″ N, 16° 22′ 23″ E");
// Returns 0

As you try and try and just don't seem to be able to find the solution, the 
ship's first mate, an old white bearded man gives you a small hint: "There are 
many ways to tackle the problem. Guess which one's the captain's favourite! His 
name was not given to him by accident!"

Good luck, navigator!


*/