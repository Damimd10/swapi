# Swapi App

> Application to show the planets that exist in the world of Star Wars

### Features

- Search for text by all available properties in the table
- Sort in ascending and descending order the name, population and diameter columns

### Run Locally

- Clone this repo and install dependencies (`yarn install`).
- Start the app with `yarn start`

### Technical decisions

The exercise literally stated that it must have some kind of mechanism to sort some columns. The problem that exists is that the API does not support any type of sorting or filter, which complicates the task.

In an ideal world where the design of the application is in our charge, this should be solved from the back end side, adding the corresponding properties to perform a sorting or filter.

The case is that the API returns the results in a paginated way, which severely complicates the situation. Possible technical decisions here could be.

- Call the backend and request the page each time you click on "Next page".

The problem here is that if we want to sort by X columns or search for a piece of data, we would do it partially, applying the filter or sort to that page. In other words, when we move to another page, it will not be ordered, or even if we could order it at the beginning, the correlation of the data would be confusing, since there could be planets that start with "A" on page two, instead of page one. page one. This would cause great confusion to the user.

- The next solution is to make a recursive call to the API every time there is a next page, in this way, we will have all the data in memory to work locally, and implement the sort, filter and pagination locally through the front end.

This last solution was the one I chose, given an inspection by the API, which only had 60 planets and the page consisted of 10 items per page. The small amount of data and API calls makes this solution possible. Of course, the optimal solution would be to edit the back end to support the filter and sort. In case the API scales with more pages and more data, this solution does not scale very well.
