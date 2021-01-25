# Swapi App

> Application to show the planets that exist in the world of Star Wars

### Features

- Search for text by all available properties in the table
- Sort in ascending and descending order the name, population and diameter columns

### Run Locally

- Clone this repo and install dependencies (`yarn install`).
- Start the app with `yarn start`

### Technical decisions

The exercise stated that the solution was required to have a sorting mechanism. However, the API doesn't seem to provide support for sorting or filtering the data requested.

In a real-world situation, I would have requested the API team to implement server-side sorting since that there is no workaround available to implement front-end non-partial sorting while keeping the advantages that server-side pagination provides.

Since there is no communication between me and the rest of the team in this kind of exercise, I went for a solution that complies with all requirements, although introducing scalability issues.

The other possible solution would have been to implement per-page front-end sorting. In that case, we would only be sorting a single page's results at a time, which would be very confusing for a potential user of the application.

I proceed to detail some pros and cons to the solution that I implemented:

Pros:

- The user can sort the entire dataset without the need to change the backend implementation.
- Partial sorting would only bring confusion from a UX perspective. Furthermore, we show a small number of records per page, so partial sorting brings no advantages over no sorting at all.
- Given the small amounts of data that we manage, the impact on performance is negligible.

Cons:

- If the dataset length grows over time, the performance will be degrading since I'm requesting every page of data before rendering the first time.
