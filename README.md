# amplify-labs

#### How to get to the same point, starting from empty repo with just `package.json`

```bash
yarn

# default options will be fine
amplify init

# should show now categories (empty) and nothing to create/delete/update
amplify status

# take a look into amplify directory, focus on one of files
cat amplify/team-provider-info.json

# add auth category, use default/first pick values for all of settings
amplify add auth

# New category: | Auth     | amplifylabsa9365f70 | Create    | awscloudformation |
amplify status

# Create or update Cognito user pool groups > add 2 groups: Managers and Employees, 
# where Managers are on the top in order of precedence
amplify update auth

# New category: | Auth     | userPoolGroups      | Create    | awscloudformation |
amplify status

# GraphQL => default => Amazon Cognito User Pool => Yes, I want to make some additional changes => 
# No additional auth types => No conflicts detection => I don't have schema => 
# Objects with fine-grained access control (e.g., a project management app with owner-based authorization)
# I don't want to edit schema now
amplify add api

# New Category: | Api      | amplifylabs         | Create    | awscloudformation |
amplify status

# Take a look, how Amplify defined all of that stuff
cat amplify-labs/amplify/backend/backend-config.json

# Take a look into template API schema model
cat amplify/backend/api/amplifylabs/schema.graphql

# Generate code for newly created API: Yes => typescript => default => Generate code for all possible operations: Yes => defaults
amplify push # it will take a while!

# Should output link to your GraphQL API!
# GraphQL endpoint: https://<API_ID>.appsync-api.eu-west-1.amazonaws.com/graphql

# Go to CloudFormation nested root stack, to check the structure

# Create a new user in Cognito, assign it to Employee group
amplify console auth

# Workaround to avoid password change after first log in
aws cognito-idp admin-set-user-password --user-pool-id <POOL_ID> --username <USERNAME> --password <PASSWORD> --permanent

# Go to API and try to create and get some stuff, in Queries tab firstly click on Login with User Pools
# If you want to add something by API, select Mutations instead of Queries first and then click + button
amplify console api
```

### API Queries to test

Will fail if you are not in Managers group
```graphql
mutation MyMutation {
  createTask(input: {title: "test 123"}) {
    id
    status
    title
    updatedAt
    description
    createdAt
  }
}
```
Add yourself into Managers group, **log out and log in** in AppSync console and try again to create a new Task.

Task ID will be returned as a result for `createTask` request.

Then you can try to get this Task:
```graphql
query MyQuery {
  getTask(id: "c3830802-1a3e-40b2-b979-060c50877a6c") {
    id
    title
    status
    updatedAt
    description
    createdAt
  }
}
```
Output:
```json
{
  "data": {
    "getTask": {
      "id": "c3830802-1a3e-40b2-b979-060c50877a6c",
      "status": null,
      "title": "test 123",
      "updatedAt": "2021-03-25T20:33:31.298Z",
      "description": null,
      "createdAt": "2021-03-25T20:33:31.298Z"
    }
  }
}
```

Remove yourself from Managers group and log out and log in, then try to call `getTask` again.
Because Employees have read only access, it should be working fine:
```graphql
@auth(
    rules: [
      { allow: groups, groups: ["Managers"], queries: null, mutations: [create, update, delete] }
      { allow: groups, groups: ["Employees"], queries: [get, list], mutations: null }
    ]
  )
```
(from `amplify/backend/api/amplifylabs/schema.graphql`)

Mutation should be not working again for if you are only in Employees group.

### But where is data stored?

- Go to DynamoDB web console
- Search for tables starting with Type and PrivateNote in name
- In Type table you will find your data!

### Relationships between data models

Now we will setup 1 to N connection between ListOfTasks and Tasks models.

Add a new `@model` type in `schema.graphql` file. 
```graphql
type Task
@model
@auth(
    rules: [
        { allow: groups, groups: ["Managers"], queries: null, mutations: [create, update, delete] }
        { allow: groups, groups: ["Employees"], queries: [get, list], mutations: null }
    ]
)
@key(name: "byListOfTasks", fields: ["listOfTasksID"]) {
    id: ID!
    title: String!
    description: String
    status: String
    listOfTasksID: ID
}
```

Now let's create a second side of connection in the list.
```graphql

type ListOfTasks
  @model
  @auth(
    rules: [
      { allow: groups, groups: ["Managers"], queries: null, mutations: [create, update, delete] }
      { allow: groups, groups: ["Employees"], queries: [get, list], mutations: null }
    ]
  ) {
  id: ID!
  title: String!
  tasks: [Task] @connection(keyName: "byListOfTasks", fields: ["id"])
}
```

Now create a list of tasks and then create a new task that belongs to this list.
```graphql
mutation MyMutation1 {
    createListOfTasks(input: {id: "c96476c4-6509-4181-9dc2-ce6c64b4530f", title: "my list"}) {
        id
        title
    }
}
mutation MyMutation2 {
  createTask(input: {listOfTasksID: "c96476c4-6509-4181-9dc2-ce6c64b4530f", title: "task linked to list example"}) {
    id
    listOfTasksID
    title
  }
}
```

And now let's get our list of tasks, including all of the tasks!
```graphql
query MyQuery {
  getListOfTasks(id: "c96476c4-6509-4181-9dc2-ce6c64b4530f") {
    tasks {
      items {
        id
        title
      }
    }
    title
    id
  }
}
```
Output:
```json
{
  "data": {
    "getListOfTasks": {
      "tasks": {
        "items": [
          {
            "id": "c92d93e8-706b-422d-aa5d-ddfad950a60b",
            "title": "task linked to list example"
          }
        ]
      },
      "title": "my list of tasks",
      "id": "c96476c4-6509-4181-9dc2-ce6c64b4530f"
    }
  }
}
```