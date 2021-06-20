# Styling
## Here are general css files (related to the whole site). These files are already applied (so you don't have to include them anywhere)  

<br></br>
## "Colors.css"
### Allows you to use defined colors in your css files.  
Examples:  

`background-color: var(--cyan)`&nbsp;&nbsp;&nbsp;\-&nbsp;&nbsp;&nbsp;![](https://via.placeholder.com/15/7dd1c1/000000?text=+)  
`background-color: var(--dark)`&nbsp;&nbsp;&nbsp;\-&nbsp;&nbsp;&nbsp;![](https://via.placeholder.com/15/3f4760/000000?text=+)  
`background-color: var(--content-d)`&nbsp;&nbsp;&nbsp;\-&nbsp;&nbsp;&nbsp;![](https://via.placeholder.com/15/3f4760/000000?text=+)  
`background-color: var(--content-l)`&nbsp;&nbsp;&nbsp;\-&nbsp;&nbsp;&nbsp;![](https://via.placeholder.com/15/ffffff/000000?text=+)  
`background-color: var(--text-d)`&nbsp;&nbsp;&nbsp;\-&nbsp;&nbsp;&nbsp;![](https://via.placeholder.com/15/000000/000000?text=+)  
`background-color: var(--text-l)`&nbsp;&nbsp;&nbsp;\-&nbsp;&nbsp;&nbsp;![](https://via.placeholder.com/15/ffffff/000000?text=+)  

`-d` stands for "dark"  
`-l` stands for "light"  
### Two colors for components are needed to imlement dark and light theme (if there will be such)

See about "Colors.js" to learn how to use defined colors in your javascript code  

<br></br>
## "Colors.js"
### Allows you to use defined colors in your css files.  
### Use
```js
import { colors } from '../../Style/Colors'
```
### to import `colors`  
### Examples:  
`<div style = {{backgroundColor: colors.cyan}} />`&nbsp;&nbsp;&nbsp;\-&nbsp;&nbsp;&nbsp;![](https://via.placeholder.com/15/7dd1c1/000000?text=+)  
`<div style = {{backgroundColor: {colors.dark} />`&nbsp;&nbsp;&nbsp;\-&nbsp;&nbsp;&nbsp;![](https://via.placeholder.com/15/3f4760/000000?text=+)  
`<div style = {{backgroundColor: {colors.content.dark} />`&nbsp;&nbsp;&nbsp;\-&nbsp;&nbsp;&nbsp;![](https://via.placeholder.com/15/3f4760/000000?text=+)  
`<div style = {{backgroundColor: {colors.content.light} />`&nbsp;&nbsp;&nbsp;\-&nbsp;&nbsp;&nbsp;![](https://via.placeholder.com/15/ffffff/000000?text=+)  
`<div style = {{backgroundColor: {colors.text.dark} />`&nbsp;&nbsp;&nbsp;\-&nbsp;&nbsp;&nbsp;![](https://via.placeholder.com/15/000000/000000?text=+)  
`<div style = {{backgroundColor: {colors.text.light} />`&nbsp;&nbsp;&nbsp;\-&nbsp;&nbsp;&nbsp;![](https://via.placeholder.com/15/ffffff/000000?text=+)


<br></br>
## "Components.css"
### Style for default components (implemented in "Components.js")  
### Put here style for your general-purpose (not related to a specific page) component

<br></br>
## "Content.css"
### Style for pages` content (body)  
### CSS classes:  
* `.content` - class for content wrapper
* `.content-text` - you should apply it to div with reqular text
* `.separator` - use `<span className = "separator"/>` to get a horizontal line

<br></br>
## "Navbar.css"
### Style for very pages` navbar
### CSS classes:  
* `.navbar` - class for navbar wrapper
* `.not-important` - when applied to navbar`s child it is hidden when page is less than 600px wide

<br></br>
## "Header.css"
### Style for pages` header  
#### You shouldn't care about this file, but if you do, the only class defined for header is `.header` - class for header wrapper


<br></br>
## "Index.css"
### Style for very general stuff (html body, code)
#### You shouldn't care about this file