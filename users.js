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
  console.log(users)

  if (currentUser) {
    return currentUser.id;
  } else {
    return -1;
  }
};
const addUser = (name, address, email, password) => {
  const usersLength = users.length;
  console.log(users)
  users.push({
    id: '' + (usersLength + 1),
    name,
    email,
    address,
    password
  })

  if (usersLength!==users.length) {
    return users.length;
  } else {
    return -1;
  }
};

module.exports = {
  users,
  findUserIdForEmail,
  addUser
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