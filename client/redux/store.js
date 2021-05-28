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
  console.log("DATA", data)
  dispatch(setNews(data)); 
}

// INITIAL STATE 
const initialState = {
    newArticles: [],
}

// REDUCER 

export default function (state = initialState, action){
    switch(action.type){
        case SET_NEWS: 
        return action.news
        default: 
        return state; 
    }

}