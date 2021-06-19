# Pages
## Here are folders with pages
### To create a page (or group of pages with similar funcitons) create a folder in this folder with appropriate name (usually name of the page) that starts with a capital letter. Then in this new folder create js file with with appropriate name (usually name of the page) that starts with a capital letter. Structure of this file may look like this: 
```js
    import {Header, Navbar, Footer} from '../../Components'
    import Content from './Content'

    function MyPage()
    {
        return(
            <>
                <Navbar content = "Моята страница"/>
                <Header />
                <Content />
                <Footer />
            </>
        )
    }
```
### Then create a js file (usually with name 'Content.js') and include it in 'YourPageFile.js'. You can do same with Navbar, Header, Footer, Sidebar or any other component, that **logically doesn't belong to (can't be a child of) the above-mentioned**. 

### To use default styling for custom components use css classes `.content`, `.header`, `.navbar`. For more info see `"Style/README.md"`. To customise style of your files create css files in your folder and import them in your js files like this
```js
import('./Content.css')
```
### **Be careful not to override general css queries! This can break other pages. Define your own classes. For example:**  
### **Instead of**  
js :

```html
<div className = "content">
    {/* Content*/}
</div>
```
css :
```css
.content
{
    /* Some style */
}
```

### **Do:** 
js :
```html
<div className = "content mypage-content">
    {/* Content*/}
</div>
```
css :
```css
.content.mypage-content
{
    /* Some style */
}
```
### To bind your page to the site export your page's component from `"YourPageFile.js"`: 
```js
export default MyPage
```
### Then import it in index.js: 
```js
import MyPage from './pages/YourPage/YourPageFile'
```
### Then add `Route` - thing that displays your page when needed. Here is where you "bind" your page/pages to certain url/urls. Add following to others `Route`s in `"index.js"`:
```html
<Route path = "/mypageurl" exact component = {MyPage}/>
```