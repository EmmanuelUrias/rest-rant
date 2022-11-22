# project rest-rant

rest-rant is an app where users can review restaurants

// user stories:
as a food enthusiast I need a community centered review website so i can read the reviews of restaurants that other people like me have tried out and enjoyed.

//route table
| Method | Path | Purpose |
| ------ | ---- | ------- |
| GET | / | Home page |
| GET | /places | Places index place |
| POST | /places | Create new place |
| GET | /places/new | Form pafe for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing place |
| DELETE | /places/:id | Delete a particular place |
| POST | /places/:id/rant | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/rantId | Delete a rant (comment) about a particular place |
| GET | \* | 404 page (matches any route not defined above) |

| Places   |
| -------- | --------- |
| Field    | Type      |
| \_id     | Object ID |
| name     | String    |
| city     | String    |
| state    | String    |
| cuisines | String    |
| pic      | String    |
