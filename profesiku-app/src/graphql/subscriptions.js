/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onCreateFile = /* GraphQL */ `
  subscription OnCreateFile {
    onCreateFile {
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
export const onUpdateFile = /* GraphQL */ `
  subscription OnUpdateFile {
    onUpdateFile {
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
export const onDeleteFile = /* GraphQL */ `
  subscription OnDeleteFile {
    onDeleteFile {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
