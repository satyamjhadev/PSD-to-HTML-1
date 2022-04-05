//element selectors, we just changed style of all the h3 to 3px and solid green at once using jquery.

$("h3").css({ border: "3px solid green" });

// elements selectors, we will change sztyle of all the class wrapper at once using jquery.

$(".wrapper").css({ border: " 3px solid green" });

// id selectors , we will changing style of some specific id using css.

$("#clients").css({ border: " 3px solid yellow " });

// using jquery filters(we uses : to target specific child elements)

// here using jquery filters we are targeting specific elements on a selector, like in the first line we are targeting (saying go tpo header then go to nav and then go to  li tag and then target first element of the li tag and in second we are targeting last li tag of the same).

$("header nav li:first").css({ border: " 2px solid red" });

$("header nav li:last").css({ border: " 2px solid red" });

// for first child and last child element, when using first-child and last child it is nopt working because our first child in id contact is not ul tag, it is h2 tag so using just first and last works fine.and but  we have ul  tag in contact id as last child element and it works fine.

$("#contact ul:first").css({ border: "2px solid blue" });

$("#contact ul:last-child").css({ border: "2px solid red" });

// Not
$(".wrapper: not('#points-of-sale')").css({ border: " 2px solid pink" };

//it is saying go to all the wrapper class and filters taht doesn't match id="points-of-sale"

//less than (lt)

$("header ul li:lt(3)").css({ border: "2px solid pink" });
$("header ul li:gt(3)").css({ border: "2px  pink" });

// atribute filters

$("div[class]").css({ border: "2px solid pink" });

// here we arfe saying that go to every div and filters out the class(any) as the class under the square bracket is attribute filter.

// Attribute with specific value.

$("img[alt] ").css({ border: " 2px solid pink" });

$("img[alt=quote]").css({ border: "2px solid red " });
