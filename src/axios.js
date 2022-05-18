import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// uses axios to store a base URL which is always the same and append the rest of the url from each type of request stored in requests.js

export default instance;

//here because we export as a default, we can import under and alias. with a plain export, we must use destructuring on the other side to import, like a react hook
