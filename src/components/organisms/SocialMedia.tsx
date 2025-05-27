import React, { VFC } from 'react';

const SocialMedia: VFC = () => (
  <div className="flex items-center">
    <a
      href="https://twitter.com/hashcloak"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-60"
    >
      <img
        src="./assets/twitter-logo-white.png"
        alt="twitter-logo"
        className="w-9 object-contain"
      />
    </a>
    <a
      href="https://github.com/hashcloak"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-7 hover:opacity-60"
    >
      <img
        src="./assets/github-logo.png"
        alt="github-logo"
        className="w-9 object-contain"
      />
    </a>
  </div>
);

export default SocialMedia;
