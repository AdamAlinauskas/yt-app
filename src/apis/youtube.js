import axios from "axios";

const KEY = "AIzaSyAuA7KrLQLmtHtA92iLmqwIYYrT_kPtgRs";
//https://www.googleapis.com/youtube/v3/search

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
