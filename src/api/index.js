import mockData from "./../mockData/users.json";

export const getUsers = async (page) => {
  let usersPage = mockData.users.slice(page * 5 - 5, page * 5 +1)
  return new Promise((resolve) => {
    resolve(usersPage);
  });
};

export const getUsersQuantity = async () => {
  return new Promise((resolve) => {
    resolve(mockData.users.length);
  });
};
