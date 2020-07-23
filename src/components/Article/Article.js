import React from "react";
import styles from "./Article.module.css";
import { Title } from "./Title";
import { Author } from "./Author";
import { Body } from "./Body";
import { LeadImage } from "./LeadImage";
import { CreatedAt } from "./CreatedAt";
import { getLeadImagePropsFrom } from "./helpers/getLeadImagePropsFrom";

export const Article = ({ data }) => {
  const { heading, author, body, mainImage, date } = data;

  return (
    <article className={styles.article}>
      <header className={styles.article__header}>
        <Title value={heading.value} />
        <div className={styles.article__byline}>
          <Author value={author.value} />,
          <CreatedAt value={date.value} />
        </div>
      </header>
      <LeadImage {...getLeadImagePropsFrom(mainImage.value)} />
      <Body values={body.values} />
    </article>
  );
};
