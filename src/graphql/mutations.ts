/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createListOfTasks = /* GraphQL */ `
  mutation CreateListOfTasks(
    $input: CreateListOfTasksInput!
    $condition: ModelListOfTasksConditionInput
  ) {
    createListOfTasks(input: $input, condition: $condition) {
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
export const updateListOfTasks = /* GraphQL */ `
  mutation UpdateListOfTasks(
    $input: UpdateListOfTasksInput!
    $condition: ModelListOfTasksConditionInput
  ) {
    updateListOfTasks(input: $input, condition: $condition) {
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
export const deleteListOfTasks = /* GraphQL */ `
  mutation DeleteListOfTasks(
    $input: DeleteListOfTasksInput!
    $condition: ModelListOfTasksConditionInput
  ) {
    deleteListOfTasks(input: $input, condition: $condition) {
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
export const createPrivateNote = /* GraphQL */ `
  mutation CreatePrivateNote(
    $input: CreatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    createPrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePrivateNote = /* GraphQL */ `
  mutation UpdatePrivateNote(
    $input: UpdatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    updatePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePrivateNote = /* GraphQL */ `
  mutation DeletePrivateNote(
    $input: DeletePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    deletePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
