# project rest-rant

rest-rant is an app where users can review restaurants

// user stories:
as a food enthusiast I need a community centered review website so i can read the reviews of restaurants that other people like me have tried out and enjoyed.

//route table
| Method | Path | Purpose |
| ------ | ---- | ------- |
| GET | / | Home page |
| GET | /places | places index place |
| POST | /places | create new place |
| GET | /places/new | form pafe for creating a new place |
| GET | /places/:id | details about a particular place |
| PUT | /places/:id | update a particular place |
| GET | /places/:id/edit | form page for editing an existing place |
| DELETE | /places/:id | delete a particular place |
| POST | /places/:id/rant | cretae a rant (comment) about a particular place |
| DELETE | /places/:id/rant/rantId | delete a rant (comment) about a particular place |
| GET | \* | 404 page (matches any route not defined above) |
