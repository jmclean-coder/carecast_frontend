const API_ROOT = `http://localhost:3000/api/v1`;
const QUOTES_API =  `https://quotes.rest/qod?category=students&language=en`
const token = () => localStorage.getItem("token");


const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token(),
  };
};

const login = data =>{
    return fetch(`${API_ROOT}/login`,{
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    })
    .then(res => res.json())

}

const getCurrentUser = () =>{
    return fetch(`${API_ROOT}/currentuser`, {
        headers: headers()
    })
    .then(res => res.json())

}

const createNewUser = data => { 
    
    return fetch(`${API_ROOT}/users`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    })
    .then(res => res.json())
}

const fetchUserData = id => {
    return fetch(`${API_ROOT}/users/${id}`, {
        headers: headers()                                        
    })
    .then(res => res.json())

}
const fetchCategories = () =>{
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
        body: JSON.stringify(feeling)
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
const fetchAffirmations = () =>{
    return fetch(QUOTES_API)
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
    affirmations:{
        fetchAffirmations,
    },
    ratings:{
        postRating
    }
}