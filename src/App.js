import React, { useState, useEffect } from "react";
import "./styles.css";
import { Article } from "./components/Article";
import { ErrorState } from "./components/ErrorState";
import { fetchArticle } from "./api/articles";
import { useRetryIndicator } from "./hooks/useRetryIndicator";

export default function App({ id }) {
  const [article, setArticle] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [retries, retry] = useRetryIndicator();

  useEffect(() => {
    setHasError(false);
    fetchArticle(id)
      .then(article => setArticle(article))
      .catch(() => setHasError(true));
  }, [id, retries]);

  return (
    <div className="App">
      {hasError ? (
        <ErrorState onRetry={retry} />
      ) : (
        article && <Article data={article?.elements} />
      )}
    </div>
  );
}
