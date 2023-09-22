import axios from "axios";

const apiUrl = 'http://localhost:3001/api/v1/user/login';
const postProfile = 'http://localhost:3001/api/v1/user/profile'




// Effectuez la requête Axios POST avec le corps JSON
export const getToken = (username, password) => axios
  .post(apiUrl, {
    email: username,
    password: password,
  })
  .then(response => {
    console.log(response.data.body)
    return response.data
    // // Supposons que le jeton (token) est dans la réponse
    // const token = response.data.token;
    // console.log('Token :', token);
    // return token;
  })
  .catch((error) => {
    console.error('Erreur :', error);
  })

export const getUser = token => axios({
  method: 'post',
  url: postProfile,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
})
  .then(response => response.data)



export const updateUserProfile = (token, firstname, lastname) => axios({
  method: 'put',
  url: postProfile, 
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  },
  data: {
    firstName: firstname,
    lastName: lastname
  }
})
  .then(response => response.data)
  .catch(error => {
    console.error('Erreur lors de la mise à jour du profil :', error);
  });