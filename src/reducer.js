export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  spotify: null,
  discover_weekly: null,
  //   remove after developing
  // token:
  //   "BQAlxcdleNMzjvdbdJHwka-q8ec6zLTO2IvmrWLBjccjYqvGol_NGwrCBLZg6BXThAXv-1XvkCLeTq7ediP-Xq3HBXilihiBmRAGTidY6bEPPBe9z4WA-UQOzaBtmsprNCJC1siYLsn0zSaMkqot4uoz2OnNqNCeuCFrJZolisOSvvZmOuQU",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    default:
      return state;
  }
};

export default reducer;
