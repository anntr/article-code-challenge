import React, { useState } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import {
  article__figcaption,
  article__image,
  image
} from "./Article.module.css";

import { BASE_URL } from "../../api/endpoints";

const LeadImage = ({ src, caption, altText, credits }) => {
  const [isLoading, setIsLoading] = useState(true);

  const imageSrc = `${BASE_URL}${src}`;

  return (
    <figure className={article__image}>
      {isLoading && <Skeleton className={image} height={500} />}
      <img
        className={image}
        style={isLoading ? { visibility: "hidden", height: 0 } : {}}
        src={imageSrc}
        alt={altText}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
        }}
      />
      <figcaption className={article__figcaption}>
        <small>
          {caption && `${caption}`}
          {credits && (
            <>
              &nbsp; by &nbsp;
              <a
                href={`//${credits}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {credits}
              </a>
            </>
          )}
        </small>
      </figcaption>
    </figure>
  );
};

LeadImage.propTypes = {
  caption: PropTypes.string,
  credits: PropTypes.string,
  altText: PropTypes.string,
  src: PropTypes.string
};

export { LeadImage };
