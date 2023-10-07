const users = [
  {
    "id": "1",
    "name": "Aruzhan",
    "email": "aruzhanart2003@mail.ru",
    "address": "Almaty",
    "password": "123456789"
  }
];

const findUserIdForEmail = (email, password) => {
  const currentUser = users.find((user) => user.email === email && user.password === password);

  if (currentUser) {
    return currentUser.id;
  } else {
    return -1;
  }
};

module.exports = {
  users,
  findUserIdForEmail
};
// const users= [
//         {
//             "id": "1",
//             "name": "Aruzhan",
//             "email": "aruzhanart2003@mail.ru",
//             "address": "Almaty",
//             "password": "123456789"
//         }
//     ]
// const findUserIdForEmail = (email: string, password: string) => {
//      const currentUser = users?.filter((user) => user.email === email && user.password === password)
    

//     if (currentUser) {
//     //   localStorage.setItem("userId", currentUser[0].id)
//       return currentUser[0].id;
//     } else {
//       console.log("user doesn't exists")
//       return -1;
//     }
// } 