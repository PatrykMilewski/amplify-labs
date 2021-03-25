/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      title
      description
      status
      listOfTasksID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      title
      description
      status
      listOfTasksID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      title
      description
      status
      listOfTasksID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateListOfTasks = /* GraphQL */ `
  subscription OnCreateListOfTasks {
    onCreateListOfTasks {
      id
      title
      tasks {
        items {
          id
          title
          description
          status
          listOfTasksID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateListOfTasks = /* GraphQL */ `
  subscription OnUpdateListOfTasks {
    onUpdateListOfTasks {
      id
      title
      tasks {
        items {
          id
          title
          description
          status
          listOfTasksID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteListOfTasks = /* GraphQL */ `
  subscription OnDeleteListOfTasks {
    onDeleteListOfTasks {
      id
      title
      tasks {
        items {
          id
          title
          description
          status
          listOfTasksID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePrivateNote = /* GraphQL */ `
  subscription OnCreatePrivateNote($owner: String!) {
    onCreatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePrivateNote = /* GraphQL */ `
  subscription OnUpdatePrivateNote($owner: String!) {
    onUpdatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePrivateNote = /* GraphQL */ `
  subscription OnDeletePrivateNote($owner: String!) {
    onDeletePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
