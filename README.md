jQuery Popdown Plugin
==============

What is a popdown? It's a simple dialog that pops down from the top of your browser window once it's loaded HTML in the background. A simple way to load web forms, content, user feedback messages, media and any other in place style content. 

It's lightweight (4kb) and fast, take a look at the demo's: http://wixel.github.io/jquery-popdown

# How to use it

1. Add the `jquery.popdown.css` file to your page.
2. Add the images inside the `img` to your images directory.
3. Add the `jquery.popdown.js` file to your page.
4. Make sure jQuery is already included in your page.
5. Add links to your page and set their `href` attributes to the pages you want loaded in the Popdowns. 
6. Add `class="popdown"` to the links you added in step 4.

```html
<a href="/pages/image.html" width="660" class="popdown btn" title="Grumpy Demo">Grumpy Demo</a>
<a href="/pages/youtube.html" class="popdown btn" title="Youtube Demo">Youtube Demo</a>
<a href="/pages/content.html" class="popdown btn" title="Content Demo">Content Demo</a>	
```

7. Add the following code:

```javascript
$(document).ready(function(){
  $('.popdown').popdown();
});
```
You can also specify the width of the popdown dialog:

```javascript
$(document).ready(function(){
  $('.popdown').popdown({width:700});
});
```
# Nuts and Bolts

You can buttons (or other elements) that can automatically close the popdown dialog by simply adding: `class="close-popdown"` to the element inside your popdown content. 
example :

```html
 <a href="#" class="close-popdown">Close</a>
```

You can fully style the underlying dialog by adjusting the `jquery.popdown.css` or even better, the `jquery.popdown.less` file. 

# License

The MIT License (MIT)

Copyright (c) 2014 Wixel Development Team

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
