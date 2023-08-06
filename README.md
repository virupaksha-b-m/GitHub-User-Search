# GitHub-User-Search
In this project, we will use an input's value to search for users in GitHub using their username or email.

# How to build it
You will first store the value typed into the input in a state value called query. After that, you will perform an HTTP request to a GitHub API endpoint to then fetch the users' profile which once again uses the browser fetch API. The request URL will use the input value.

Once the results are fetched, we'll see how to display all the relevant info such as their name, avatar, and a link to go to their profile.

A good way to extend this project would be to attempt to allow search functionality as the user types instead of having to submit the form first. Make sure to use a debounce function to ensure that you do not too many requests to the GitHub API and get a 429 error response (too many requests).

# link for the project
https://codesandbox.io/s/github-user-search-forked-2tsjlj?file=/src/App.js


# Final result
![image](https://github.com/virupaksha-b-m/GitHub-User-Search/assets/91652877/76616034-2c25-44c6-affd-0ae618817170)

