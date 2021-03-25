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
```