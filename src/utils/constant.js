// export const API_KEY = "AIzaSyDlmq2GjzaGpg2uR85nxk1Jw_Z99iJv7G8";
export const API_KEY = "AIzaSyDNInJX9JPISyC9G1D7qCD1xB0LBSTYXLc"; //new
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 25;

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "k";
  } else {
    return value;
  }
};
