# Styling
## Here are general css files (related to the whole site). These files are already applied (so you don't have to include them anywhere)  

<br></br>
## "Colors.css"
### Here are defined all colors. They must not be overwritten anywhere
Colors are divided into constants and relative.

Constants don't change. Here are all constant colors:

|Color name    |                    Color                                                                    |
|--------------|--------------------------------------------------------------------------------------------:|
| `--pink`|![](https://via.placeholder.com/15/E0B0FF?text=+) | 
| `--very-light-purple`|![](https://via.placeholder.com/15/D0B0FF?text=+)  |
| `--light-purple`|![](https://via.placeholder.com/15/AA95D1?text=+)  |
| `--purple`|![](https://via.placeholder.com/15/A070B1?text=+)  |
| `--dark-purple`|![](https://via.placeholder.com/15/402051?text=+)|
| | |
|`--very-light-cyan`|![](https://via.placeholder.com/15/E0B0FF?text=+) |
| `--light-cyan`|![](https://via.placeholder.com/15/A8E8D5?text=+) |
| `--cyan`|![](https://via.placeholder.com/15/7DD1C1?text=+) |
| `--dark-cyan`|![](https://via.placeholder.com/15/70B1A1?text=+) |
| | |
| `--dark-green`|![](https://via.placeholder.com/15/335049?text=+) |
| `--sea-wave`|![](https://via.placeholder.com/15/204050?text=+) |
| `--dark-blue`|![](https://via.placeholder.com/15/102030?text=+) |
| | |
| `--blood-red`|![](https://via.placeholder.com/15/aa0000?text=+) |
| `--light-red`|![](https://via.placeholder.com/15/ff7080?text=+) |

Relative colors depend on current theme and describe color of a <ins>component</ins> or <ins>type of content (like text)</ins>. Here are all relative colors:

|Color name    |Light theme color |Dark theme color |
|--------------|:----------------:|:---------------:|
| `--background`|![](https://via.placeholder.com/15/E0FFE8?text=+) | ![](https://via.placeholder.com/15/102030?text=+)
|
| `--primary`|![](https://via.placeholder.com/15/402051?text=+)  |![](https://via.placeholder.com/15/E0FFE8?text=+)
| `--secondary`|![](https://via.placeholder.com/15/70B1A1?text=+)  |![](https://via.placeholder.com/15/70B1A1?text=+)
| `--hidden`|![](https://via.placeholder.com/15/A8E8D5?text=+)  |![](https://via.placeholder.com/15/70B1A1?text=+)
| `--error`|![](https://via.placeholder.com/15/aa0000?text=+)  |![](https://via.placeholder.com/15/ff7080?text=+)
| `--important`|![](https://via.placeholder.com/15/102030?text=+)  |![](https://via.placeholder.com/15/E0FFE8?text=+)
||
| `--text-primary`|![](https://via.placeholder.com/15/402051?text=+)  |![](https://via.placeholder.com/15/E0FFE8?text=+)
| `--text-secondary`|![](https://via.placeholder.com/15/70B1A1?text=+)  |![](https://via.placeholder.com/15/70B1A1?text=+)
||
| `--button-primary`|![](https://via.placeholder.com/15/402051?text=+)  |![](https://via.placeholder.com/15/E0FFE8?text=+)
| `--text-button-primary`|![](https://via.placeholder.com/15/E0FFE8?text=+)  |![](https://via.placeholder.com/15/335049?text=+)
| `--button-secondary`|![](https://via.placeholder.com/15/70B1A1?text=+)  |![](https://via.placeholder.com/15/70B1A1?text=+)
| `--text-button-secondary`|![](https://via.placeholder.com/15/402051?text=+)  |![](https://via.placeholder.com/15/E0FFE8?text=+)
||
| `--dropdown`|![](https://via.placeholder.com/15/402051?text=+)  |![](https://via.placeholder.com/15/E0FFE8?text=+)
| `--text-dropdown`|![](https://via.placeholder.com/15/E0FFE8?text=+)  |![](https://via.placeholder.com/15/102030?text=+)
||
| `--navbar`|![](https://via.placeholder.com/15/A8E8D5?text=+)  |![](https://via.placeholder.com/15/102030?text=+)
| `--text-navbar`|![](https://via.placeholder.com/15/402051?text=+)  |![](https://via.placeholder.com/15/E0FFE8?text=+)
||
| `--footer`|![](https://via.placeholder.com/15/A8E8D5?text=+)  |![](https://via.placeholder.com/15/102030?text=+)
| `--footer-1`|![](https://via.placeholder.com/15/102030?text=+)  |![](https://via.placeholder.com/15/E0B0FF?text=+)
| `--footer-2`|![](https://via.placeholder.com/15/402051?text=+)  |![](https://via.placeholder.com/15/E0FFE8?text=+)
| `--footer-3`|![](https://via.placeholder.com/15/204050?text=+)  |![](https://via.placeholder.com/15/7DD1C1?text=+)



<br></br>
## "Components.css"
### Style for default components (implemented in "Components.js")  
### Put here style for your general-purpose (not related to a specific page) component

<br></br>
## "Button.css"
### Style for button (implemented in "Components.js")  
### It is isolated from other components to reduce size of "Components.css"

<br></br>
## "Page.css"
### Default styles for pages 
### CSS classes: 
#### Content: 
* `.content` - class for content wrapper
* `.content-text` - you should apply it to div with reqular text
#### Header:
* `.header`

<br></br>
## "Style.css"
### Style for very general stuff (html, body, #root)
### Here sre included other css files from this folder
##### You shouldn't care about this file

<br></br>
## "Utilities.css"
### Useful css modifiers
### CSS classes:
* `.hoverable` - makes the element a little transparent at rest and opaque on hover
* `.separator` - use `<span className = "separator"/>` to get a horizontal line

<br></br>
## "Icons.css"
### Handles custom icons
