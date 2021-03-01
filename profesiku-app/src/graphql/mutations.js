/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createFile = /* GraphQL */ `
  mutation CreateFile(
    $input: CreateFileInput!
    $condition: ModelFileConditionInput
  ) {
    createFile(input: $input, condition: $condition) {
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
export const updateFile = /* GraphQL */ `
  mutation UpdateFile(
    $input: UpdateFileInput!
    $condition: ModelFileConditionInput
  ) {
    updateFile(input: $input, condition: $condition) {
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
export const deleteFile = /* GraphQL */ `
  mutation DeleteFile(
    $input: DeleteFileInput!
    $condition: ModelFileConditionInput
  ) {
    deleteFile(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
