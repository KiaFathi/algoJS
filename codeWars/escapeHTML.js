/*
Create a function, which escapes all HTML markup of a given string. 
Replacing entities of special characters is not needed.

Examples say more than words:

var strEscaped = escapeHTML('<p>Lorem ipsum dolor sit amet.</p>');          
var strEscaped = escapeHTML('This text has <strong>bold</strong> markup.'); 
Watch carefully all test fixtures. If you pass all four of them, you have solved it. :-]

If you need a good online regular expression tester: http://regex101.com/#javascript
*/

var escapeHTML = function(str) {
    // TODO: your code
    var newStr = str;
    
    newStr = newStr.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return newStr;
};


console.log(escapeHTML('<p>Lorem ipsum dolor sit amet.</p>')) 
// '&lt;p&gt;Lorem ipsum dolor sit amet.&lt;/p&gt;'
console.log(escapeHTML('This text has <strong>bold</strong> markup.'))
// 'This text has &lt;strong&gt;bold&lt;/strong&gt; markup.'
console.log(escapeHTML('This is <a href="http://appsunited.net>my website</a>'))
// 'This is &lt;a href=&quot;http://appsunited.net&gt;my website&lt;/a&gt;'
console.log(escapeHTML('No <html> markup like <body><h1>headline</h1><p>Text</p></body> is allowed!'))
// 'No &lt;html&gt; markup like &lt;body&gt;&lt;h1&gt;headline&lt;/h1&gt;&lt;p&gt;Text&lt;/p&gt;&lt;/body&gt; is allowed!'