// const API_ROOT = `http://localhost:3000/api/v1`;
const CORS_PROXY = `https://floating-wildwood-76961.herokuapp.com/`
const AFFIRMATIONS_API =  `https://www.affirmations.dev`
const API_ROOT = `https://carecast-app-api.herokuapp.com/api/v1`
const token = () => localStorage.getItem("token");


const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token()}`,
  };
};


const login = data => {
    console.log(headers(), "hi from api login!", data)
    return fetch(`${API_ROOT}/login`,{
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    })
    .then(res => res.json())
}

const getCurrentUser = () =>{
    console.log(headers(), "hi from api getCU!")
    return fetch(`${API_ROOT}/currentuser`, {
        headers: headers()
    })
    .then(res => res.json())

}

const createNewUser = data => { 
    console.log(headers(), "hi from api createNU")
    return fetch(`${API_ROOT}/users`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    })
    .then(res => res.json())
}

const fetchUserData = id => {
    console.log(headers(), "hi from api fetchUD!")
    return fetch(`${API_ROOT}/users/${id}`, {
        headers: headers()                                        
    })
    .then(res =>res.json())
}
const fetchCategories = () =>{
    console.log(headers(), "hi from api FetchC!")
    return fetch(`${API_ROOT}/categories`,{
        headers: headers()
    })
    .then(res => res.json())
}

const patchRating = data => {
    return fetch(`${API_ROOT}/user_ratings/${data.id}`, {
        method: "PATCH",
        headers: headers(),
        body: JSON.stringify({
            rating: data.rating
        })
    })
    .then(res => res.json())
}
const postRating = (data) =>{
    console.log(data)
    return fetch(`${API_ROOT}/user_ratings`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    })
    .then(res => res.json())
}
const fetchFeelings = () =>{
    return fetch(`${API_ROOT}/feelings`, {
        headers: headers()
    })
    .then(res => res.json())
}
const postUserFeeling = feeling =>{

    return fetch(`${API_ROOT}/user_feelings`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({user_feeling: { feeling}})
    })
.then(res => res.json())
}
const postUserJournal = data => {
    return fetch(`${API_ROOT}/journal_entries`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    })
    .then(res => res.json())
}
const fetchAffirmation = () =>{
    return fetch(CORS_PROXY + AFFIRMATIONS_API)
    .then(res => res.json())
}
const patchJournal = (data, id) =>{
    console.log(data,id)
    return fetch(`${API_ROOT}/journal_entries/${id}`, {
        method: "PATCH",
        headers: headers(),
        body: JSON.stringify({
            title: data.title,
            content: data.content,
            user_id: data.user_id
        })
    })
    .then(res=> res.json())
}

export const api ={
    auth: {
        login,
        getCurrentUser
    },
    user:{
        createNewUser,
        fetchUserData,
        
    },
    categories:{
        fetchCategories
    },
    patch:{
        patchRating,
        patchJournal,
    },
    feelings:{
        fetchFeelings,
        postUserFeeling,
    },
    journals:{
        postUserJournal,
    },
    affirmation:{
        fetchAffirmation,
    },
    ratings:{
        postRating
    }
}