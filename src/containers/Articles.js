import React from "react";
import Article from "../components/Article/Article";
import AddArticle from "../components/AddArticle/AddArticle";
import { connect } from "react-redux";
import { simulateHttpRequest } from "../store/actionCreators";

const Articles = ({ articles, saveArticle }) => {

  return (
    <div>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveArticle: (article) => dispatch(simulateHttpRequest(article)),
    // saveArticle: article => dispatch(addArticle(article)),
    // saveArticle: (article) =>
    //   dispatch({ type: actionTypes.ADD_ARTICLE, articleData: { article } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
