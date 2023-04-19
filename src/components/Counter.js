import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/counterSlice";
import { useState } from "react";
import { addUser, totalUsersAgeCount } from "../redux/usersSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const usersArr = useSelector((state) => state.users.usersArray);
  const userArrLength = useSelector((state) => state.users.totalUsers);

  const [onChange, setOnChange] = useState(0);
  const [user, setUser] = useState("");
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <input type="number" onChange={(e) => setOnChange(e.target.value)} />
      <button onClick={() => dispatch(incrementByAmount(onChange))}>
        Increment by amount
      </button>
      <p>{usersArr.map((e) => e.name + ", ")}</p>
      <br></br>
      <input
        type="text "
        placeholder="Enter a name"
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={() => dispatch(addUser(user))}>Add User</button>
      {userArrLength}
      <button onClick={()=> dispatch(totalUsersAgeCount())}>yo</button>
    </div>
  );
};

export default Counter;
