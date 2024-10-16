import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"Search",
    initialState:{
        movieName:null,
        searchedMovie:null
    },
    reducers:{
        setSearchmovieDetails:(state,action)=>{
            const {searchMovie, movies} = action.payload;
            state.movieName =searchMovie;
            state.searchedMovie =movies;
        }
    }
});
export const { setSearchmovieDetails} = searchSlice.actions;
export default searchSlice.reducer;