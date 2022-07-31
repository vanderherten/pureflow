## Testing

### Validator Testing

- HTML:
    - [The W3C Markup Validation Service](https://validator.w3.org/) tool was used to validate all html files.
        - The warning and errors were fixed, which resulted in no errors found.
            - There was a warning that the list role is unnecessary for element ul.
            - There was an error for a type attribute on the form inputs.
        ![Home page html markup validator results](assets/images-readme/images-testing/w3c-html-validator-index.png).
        ![Classes page html markup validator results](assets/images-readme/images-testing/w3c-html-validator-classes.png)  
        - The Contact page returned an error, which I intentionally left unfixed.
            - There was an error for value 100% on the attribute width and height on element iframe (google map).
            - A method was used to embed a responsive google map without google apis or further css styling. [Responsive google maps embed methods webpage](https://blog.duda.co/responsive-google-maps-for-your-website). [Responsive google maps embed method excerpt](assets/images-readme/images-testing/embed-google-map.png).
        ![Contact page html markup validator results](assets/images-readme/images-testing/w3c-html-validator-contact.png)            
- CSS:
    - [The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) tool was used to validate the CSS stylesheet.
        - The errors were fixed, which resulted in no errors found.
            - There was a syntax error for margin-top.
        ![CSS validator results](assets/images-readme/images-testing/w3c-css-validator.png)            
- Accessibility:
    - I tested the website's accessibility by running it through Lighthouse in the Google Chrome developer tools: 
    ![Lighthouse results](assets/images-readme/images-testing/lighthouse-score.png)

### Website Functionality Testing

- Website:
    - I tested that all the pages work in different browsers:
        - Chrome, Firefox, Safari.
- Navigation links:
    - All navigation links were tested for desktop and mobile:
        - The primary navigation menu and logo link was tested to validate that all of the links work correctly.
        - The 'Sign Up For A Free Trial Week' button link was also tested to validate it worked correctly.
- Footer Social Media links:
    - All social media links were tested on all the web pages for desktop and mobile:
        - They were tested to make sure they opened up in a new tab.
- Forms:
    - All forms were tested:
        - By omitting input items or filling the form out incorrectly, whereby the correct feedback error got displayed.
        - By filling the form out correctly and getting a positive result from [Code Institute form validator](https://formdump.codeinstitute.net/).
        - The forms were also tested to see if the css design worked by which a blue border appeared on the active item and the button also appears darker on hovering over. These design elements give the user visual aids when using the website's features. 
        - The google map was tested on it's functionality to zoom in and also the ability to open a larger map in a new tab. 
- Desktop and Mobile layout:
    - The website layout was mostly build with flexbox and the ux design was created with this in mind:
        - The web pages were tested to see if all moving parts moved smootly when changing from a wide viewport to a small viewport and vice-versa.
        - The Navigation Bar was tested on all pages to make sure the navigation bar stayed fixed on top while scrolling down the web page, to make sure the user has access to all the navigational links on the site at all times.
        - The Mobile Navigation menu was tested on all pages to make sure the mobile icon toggle function worked and the menu items got displayed on a white background covering the whole viewport and masking the web page's content.
        - The Mobile layout was tested in the google chrome developer tools with Device Mode set for different mobile devices. The Mobile layout was also tested on my personal mobile phone. All the pages and content were aligned and sized correctly with a great user experience in mind.

### Bugs

- Solved Bugs: 
    - Mobile Navigation:
        - The mobile navigation menu items would have a slight upward motion when hovered over, as they were build with a top and bottom border to highlight the current navigation menu item. I solved the issue in the desktop version by adding align-items: center, but on the mobile menu I had a harder time solving the issue, but eventually used a simple hack by adding a white border (invisible to the eye) to the menu links link and visited state. This solved the issue as it stopped the content from growing when activated, as the border was already added to start with.
        - Even though the project was build solely using html and css. In order to make the mobile navigation work, I opted to implement some JavaScript, whereby I used JavaScript ES6. I was able to do this, as I have sufficient knowledge of JavaScript to implement this function. 
    - Google map in Studio section on Contact page:
        - The google map bottom straight corners would overflow the form bottom corners as they have a border radius. After googling, I did not find a solution and eventually solved the issue by adding an extra pixel to the bottom border of the form, which made the overflow less appearant to the eye. 
        - The google map bright colors did not fit the website muted color scheme. This could disrupt the intended use of color in the UI to guide the user's eye to the important action points on the page. So I added a grayscale filter to bring down the intensity of the colors and make them fit in the UI color design. 
    - Web pages desktop layout:
        - To keep the text content on the page easy to read at a wide viewport and have the image content structure stay intact to have a beautiful UX and UI design: I Added a div element wrapper with a max-width around the body content so that the layout wouldn't expand beyond it's optimal widest width. 
    - Intention section images on the Home page:
        - The black and white images taken from unsplash were very high in contrast, which disrupted the soft UI colors of the web design. Therefore I used a contrast filter to bring down the contrast, so that the images appeared much softer to the eye. 
    - Deployment of website:
        - When I deployed my project to Github Pages, I was confused as to why my images weren't loading. This was because I had used absolute file paths in my code and so I fixed the issue promptly. 
- Unsolved Bugs: 
    - No unfixed bugs





   





    



