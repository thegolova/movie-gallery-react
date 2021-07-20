
export const isAuth = (users, user) => {
  /* console.log(users); */
  let response = {
    user: [],
    resultCode: 1
  }
 
  let match = 0;
  Object.values(users).forEach(item => {
    if (match === 0) {
      if (item.login.toLowerCase() === user.login.toLowerCase()) {
        match = 1;
        if (item.password === user.password) {
            response = {
              ...response,
              user: item,
              resultCode: 0
            }
        }
      }
    }
  })

  return response;
}