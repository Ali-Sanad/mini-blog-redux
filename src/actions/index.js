import jsonPlaceHolder from "../apis/jsonPlaceHolder";

//*********** async actions using redux-thunk to handle it****************

//fetch posts
export const fetchPosts = () => async (dispatch) => {
  const incomingData = await jsonPlaceHolder.get("/posts");
  // payload is an array of objects
  dispatch({ type: "FETCH_POSTS", payload: incomingData.data });
};

//fetch single user
export const fetchUser = (userId) => async (dispatch, getState) => {
  const incomingData = await jsonPlaceHolder.get(`/users/${userId}`);
  dispatch({ type: "FETCH_USER", payload: incomingData.data });
};

//fetch posts and users
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const users = getState().posts.map((p) => p.userId);
  const uniqueUsers = [];
  users.forEach((usid) => {
    //to prevent storing duplicate user ids
    if (!uniqueUsers.includes(usid)) {
      uniqueUsers.push(usid);
    }
  });

  uniqueUsers.forEach((usid) => dispatch(fetchUser(usid)));
};
