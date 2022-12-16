# Project rest-rant

# Note to self

images dont display properly. Go through part 1-current and add all the possible comments to your code. Do bonus for part 5. Do super bonus for part 9. Routes edit, update, and delete do not work. There is a bug in the seed-comments.js file where the push is undefined causing the .length method to not work.

rest-rant is an app where users can review restaurants

**User Story:**
As a food enthusiast I need a community centered review website so i can read the reviews of restaurants that other people like me have tried out and enjoyed.

## Route Table

| Method | Path                    | Purpose                                          |
| ------ | ----------------------- | ------------------------------------------------ |
| GET    | /                       | Home page                                        |
| GET    | /places                 | Places index place                               |
| POST   | /places                 | Create new place                                 |
| GET    | /places/new             | Form pafe for creating a new place               |
| GET    | /places/:id             | Details about a particular place                 |
| PUT    | /places/:id             | Update a particular place                        |
| GET    | /places/:id/edit        | Form page for editing an existing place          |
| DELETE | /places/:id             | Delete a particular place                        |
| POST   | /places/:id/rant        | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/rantId | Delete a rant (comment) about a particular place |
| GET    | \*                      | 404 page (matches any route not defined above)   |

### Places

| Field    | Type      |
| -------- | --------- |
| \_id     | Object ID |
| name     | String    |
| city     | String    |
| state    | String    |
| cuisines | String    |
| pic      | String    |
