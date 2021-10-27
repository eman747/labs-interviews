# Construct Co.

A simple react and nodejs based web application to show companies with search and filter

## Run Application

- In *server* directory:

   ```
    npm install
    npm start (server will be up and running on port 8080)
   ```

- In *client* directory:

   ```
    npm install
    npm start (client will be up and running on port 8080)
   ```

**Note:** On frontend we're using proxy (see in *client/package.json*)

## Front Pages

- http://localhost:3000/
- http://localhost:3000/companies?search (for live search)

## Todos

In (*client/src/pages/home.tsx*)

- [ ] Load companies data 
- [ ] Add Search field and search only for company name
- [ ] Create and implement Checkbox filter logic

In (*client/src/pages/companies-list.tsx*)

- [ ] Live search with axios (HOME TASK)

## Test Guidlines

Clone the code on your local-machine

> git clone https://github.com/CERP/labs-interviews.git

Create a new branch

> git check -b [yourname-test] (shahab-test)

Change working directory

> cd labs-interviews/construction-co

Start working and at the end push your branch

> git push origin [branch-name]
