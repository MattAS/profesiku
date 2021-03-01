/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      first_name
      last_name
      phone
      dateOfBirth
      type
      rating
      rate
      project {
        items {
          id
          title
          dateStart
          dateEnd
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        phone
        dateOfBirth
        type
        rating
        rate
        project {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      title
      dateStart
      dateEnd
      createdAt
      files {
        items {
          id
          title
          url
          createdAt
          updatedAt
        }
        nextToken
      }
      jobs {
        items {
          id
          title
          dateStart
          dateEnd
          description
          category
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      user {
        id
        first_name
        last_name
        phone
        dateOfBirth
        type
        rating
        rate
        project {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        dateStart
        dateEnd
        createdAt
        files {
          nextToken
        }
        jobs {
          nextToken
        }
        user {
          id
          first_name
          last_name
          phone
          dateOfBirth
          type
          rating
          rate
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFile = /* GraphQL */ `
  query GetFile($id: ID!) {
    getFile(id: $id) {
      id
      title
      url
      createdAt
      project {
        id
        title
        dateStart
        dateEnd
        createdAt
        files {
          nextToken
        }
        jobs {
          nextToken
        }
        user {
          id
          first_name
          last_name
          phone
          dateOfBirth
          type
          rating
          rate
          createdAt
          updatedAt
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const listFiles = /* GraphQL */ `
  query ListFiles(
    $filter: ModelFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        url
        createdAt
        project {
          id
          title
          dateStart
          dateEnd
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      dateStart
      dateEnd
      description
      category
      status
      project {
        id
        title
        dateStart
        dateEnd
        createdAt
        files {
          nextToken
        }
        jobs {
          nextToken
        }
        user {
          id
          first_name
          last_name
          phone
          dateOfBirth
          type
          rating
          rate
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        dateStart
        dateEnd
        description
        category
        status
        project {
          id
          title
          dateStart
          dateEnd
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
