export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQBXMLb8Q4rgJ9V11pQciwndMRt5QgqdyLkgggqV7qzn22m5meWIxyuOweSQt5Q15rgphvb9XpKTysDYvk9fNFJ4SSrlMfUuROOr6DNxgo6j0oz1lyA63W_E84R4_mEqnEULKjN1-IUWV3OqF7ODCNUXPdx92omSZL1WlCPsdfLCXwvL",
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
    default:
      return state;
  }
};

export default reducer;
