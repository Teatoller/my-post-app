import * as actionTypes from "./actionTypes";

const initialState = {
  articles: [
    { id: 1, title: "Post 3", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "Post 4", body: "Quisque cursus, metus vitae pharetra" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle = {
        id: Math.random(), // not really unique but it's just an example
        title: action.article.title,
        body: action.article.body,
      };
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      };
    default:
      return state;
  }
};
export default reducer;
