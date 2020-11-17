import users from './../mockData/users.json'

export const getUsers = async () => {
  return new Promise(resolve => {
    resolve(users)
  })
}