import { createSlice } from "@reduxjs/toolkit";
//slice is a function that takes an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    usersArray: [
      {
        name: "Grumpy",
        age: 40,
      },
      {
        name: "Happy",
        age: 20,
      },
      {
        name: "Sleepy",
        age: 80,
      },
      {
        name: "Dopey",
        age: 5,
      },
      {
        name: "Sneezy",
        age: 30,
      },
    ],
    totalUsers: 0,
  },
  reducers: {
    addUser: (state, action) => {
      state.usersArray.push({
        name: action.payload,
        age: 99,
      });
    },
    totalUsersAgeCount: (state) => {
      state.totalUsers = state.usersArray.reduce((acc, curr) => {
        return acc + curr.age;
      }, 0); 
    },
},
});

export const { addUser, totalUsersAgeCount } = usersSlice.actions;

export default usersSlice.reducer;
