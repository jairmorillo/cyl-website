import { useEffect } from 'react';

const SITE_NAME = 'CYL';

const setMetaTag = (attribute, key, content) => {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
};

export const useSEO = ({ title, description }) => {
  useEffect(() => {
    if (!title && !description) return;

    if (title) {
      document.title = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
      setMetaTag('property', 'og:title', document.title);
      setMetaTag('name', 'twitter:title', document.title);
    }

    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }
  }, [title, description]);
};
