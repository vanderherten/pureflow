## Testing

### Code Validation

- HTML:
    - [The W3C Markup Validation Service](https://validator.w3.org/) tool was used to validate all html files.
        - The warning and errors were fixed, which resulted in no errors found.
            - [Home page html markup validator results](assets/images-readme/images-testing/w3c-html-validator-index.png).
            - [Classes page html markup validator results](assets/images-readme/images-testing/w3c-html-validator-classes.png).  
            - There was a warning that the list role is unnecessary for element ul.
            - There was an error for a type attribute on the form inputs.
        - The Contact page returned an error, which I intentionally left unfixed.
            - [Contact page html markup validator results](assets/images-readme/images-testing/w3c-html-validator-contact.png). 
            - There was an error for value 100% on the attribute width and height on element iframe (google map).
            - A method was used to embed a responsive google map without google apis or further css styling. [Responsive google maps embed methods webpage](https://blog.duda.co/responsive-google-maps-for-your-website). [Responsive google maps embed method excerpt](assets/images-readme/images-testing/embed-google-map.png).