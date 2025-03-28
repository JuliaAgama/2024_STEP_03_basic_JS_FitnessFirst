# Task

Program the functionality of the coach viewing page.

Planned functionality on the page: card viewing, modal window with full information, sorting and filtering of cards.

## Technical requirements

### General requirements

- When opening the page, you can immediately see only the logo and copyright.
- The `index.html` file contains all the necessary markup for the project. You cannot directly change the structure in the `index.html` file.
- It is allowed to add styles and attributes to elements using javascript if necessary.
- The project should work in all supported browsers without errors.
- The project code is written using `strict mode in javascript`.

### Cards

- When loading the page, display the trainer cards on the page in the middle of the element with the `trainers-cards__container` class. The data for filling in the trainer cards is in the `DATA` variable in the `index.js` file. As a sample of the trainer card markup, take the template with the id `trainer-card`.
- After displaying all the cards on the screen - show the filter and sorting blocks. To show the filter block and sorting block, you need to remove the `hidden` attribute from them.

### Modal with information about the coach

- A modal window with data about a specific coach appears when you click the `SHOW` button.
- When displaying a modal window, prohibit scrolling the page.
- The information to be filled in is in the object with information about the coach.
- The modal window template is in the `modal-template` template.
- Clicking on the cross in the modal window should remove the modal window from the DOM. At the same time, there should be only one instance of the modal window in the DOM.
- After closing the modal window, scrolling the page with it should be available.

### Sorting

- When the page loads, the cards are displayed in the order in which they are written in the `DATA` variable.
- When clicking on the `by last name` button, the cards on the page should be sorted by last name `from A to Z`.
- When clicking on the `by experience` button, the cards on the page should be sorted by experience `from highest to lowest`.
- When any sorting button becomes active, the `sorting__btn--active` class is added to it. This class should be removed from other buttons. There can only be one type of sorting at a time.

### Filtering

- When loading the page, all cards are displayed. In the `DIRECTIONS` and `CATEGORIES` blocks, `ALL` items are selected. The filter should work when the `SHOW` button is pressed.
- When selecting any direction, except `ALL`, the array of cards should be filtered and only those coaches that belong to this direction should be shown on the page.
- When selecting any category, except `ALL`, the array of cards should be filtered and only those coaches that belong to this category should be shown on the page.
- If both the direction and the category are changed, the page should show cards of only those coaches that correspond to both the selected direction and the selected category at the same time.
- When filtering, the page should not be reloaded.

#### Optional task of increased complexity

- When initially loading coach cards and filtering, show the preloader, and remove it after displaying the cards on the page.
- When refreshing the page, save the filtering and sorting parameters. If the user changes the initial filter and sorting parameters, when refreshing the page, the sorting and filtering parameters that the user set last should be applied to the cards. Coach cards should be displayed on the page, taking into account these latest parameters.
