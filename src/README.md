# Source

<br></br>
## "Assets.js"
Stores info about universities and lessons (divided by subjects (biology and chemistry), grades, sections and subsections). Every university includes name, url used on our site, link to the official site and to the official page for application, general info, specialities. Every lesson consists of title, url and test. "Assets.js" povides basic functionality for easier usage:
* ## Lessons
  * `GetLessons(url)` - returns lesson corresponding to `url`
  * `GetNextLesson(url)` - if the lesson, that corresponds to `url`, is the last in a section or a subsection, this function returns object that contains fields `section` and if the lesson is in a subsection, `subsection`. If the lesson isn't the last, the function returns next lesson in the section or subsection. This function most probably will be used for making links on lessons and test pages only
  * `GetSectionByUrl(url)` - returns section with given url. Used for lessons navigation
* ## Universities
  * `GetUni` - returns university object that corresponds to given url

To access universities directly, import `unis` from `Assets.js`  
To access lessons directly, import `lessons` from `Assets.js`  

<br></br>
## "Components.js"
Implements general-purpose (not related to a specific page) components. Styling for them is in `Style/Components.css`
## Components:
* `Button`  
Properties:  
  * `link` and `onClick` - you can use one of these to handle click. `link` links to a page, `onClick` is invoked when the button is pressed. Setting both of them makes no sense so don't do it :)
  * `width` - you can set width from css as well. For this purpose use `.button` class
  * `height` - you can set height from css as well. For this purpose use `.button` class
  * `name`, `title` or `content` - these are synonyms; they are put inside the button
* `Dropdown` and `DropdownElement` - use them to create dropdown (might have bugs).
Properties:  
  * `DropdownElement`
    * link
    * name
  * `Dropdown`
    * options - array of objects with fields `name` and `link`. This array is used to create dropdown elements. 
    ```html
        <Dropdown options = {[
          {name: "aaa", link: "/aaa"}, 
          {name: "bbb", link: "/bbb"}
          ]}/>
    ```
    Alternatively you can use `DropdownElement`s: 
    ```html
        <Dropdown>
            <DropdownElement name = "aaa" link = "/aaa"/>
            <DropdownElement name = "bbb" link = "/bbb"/>
        </Dropdown>
    ```
    To customise a dropdown, use css queries `div.dropdown` for dropdown container, `ul.dropdown-options` for options container, `.dropdown-options>li` for options (dropdown elements), and `dropdown-options .button` for buttons
* `Search`  
  Properties:  
  * `margin` - seach field floats left. Using `margin` you can set margin-left of it. By default margin is 10px
  * `placeholder` - placeholder of input
  * `width` - width of the serch field when expended. By default it is `100% - 20px`
  * `search(request)` - funcition that is invoked when search request is made (enter pressed or search icon clicked). `search` takes argument `request` and must return a component for search result window
* `Footer` - footer. It will probably be same for all pages so it doesn't have any `props`. (Actually it is empty `:)` )
* `Navbar` 
  Properties:  
  * `content` - this is put inside `Navbar`
* `Header` 
  Properties:  
  * `content` - this is put inside `Header`
* `Title` 
  Properties:  
  * `name`, `title` or `content` - these are synonyms
  * `subtitle` - boolean. If set font is smaller (you can use `Subtitle`)
* `Subtitle`
  Properties:  
  * `name`, `title` or `content` - these are synonyms
* `Video` - wrapper for video-js `VideoPlayer` component. All given properties will be passed to `VideoPlayer` component. You can access this component from css using `.video` query. (**Remember: don't override default styling**)

<br></br>
## "Cookies.js"
Simplifies cookies manipulation  
Functions:  
* `SetCookie(name, value, exp_time)` - sets cookie that expires after `exp_time` hours
* `GetCookie(name)` - returns cookies value
* `DeleteCookie(name)` - deletes cookie

<br></br>
## "index.js"  
File that renders pages depending on location (url)  
To add a new page you must include include your page's component and add `Route`. To learn how to make your page's component see `"pages/README.md"`. To learn how to use React router visit https://reactrouter.com/web/guides/quick-start
