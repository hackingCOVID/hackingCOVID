import axios from "axios";

// ACTION TYPES

const SET_NEWS = "SET_NEWS";


// ACTION CREATOR

export const setNews = (news) => {
  return {
    type: SET_NEWS,
    news,
  };
};


// THUNK 

export const fetchNews = () => async (dispatch)=> {
  const {data} = await axios.get("/api/news")
  console.log("data", data)
  dispatch(setNews(data)); 
}

// INITIAL STATE 
const initialState = {
    newsArticles: [],
}

// REDUCER 

export default function (state = initialState, action){
  console.log("reducer", action)
    switch(action.type){ 
        case SET_NEWS: 
        return {...state, newsArticles: action.news}// returns to map state 
        default: 
        return state; 
    }

}