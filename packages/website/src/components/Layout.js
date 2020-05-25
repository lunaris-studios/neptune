import React from 'react';
import Helmet from 'react-helmet';

function Layout({ children, ...props }) {
  return (
    <>
      <Helmet>
        <title>Nucleus</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="stylesheet" href="https://core.modulz.app/fonts/fonts.css" />

        <meta property="og:url" content="https://nucleus.modulz.app/" />
        <meta property="og:image" content="https://nucleus.modulz.app/social/hero.png" />
        <meta property="og:title" content="Nucleus" />
        <meta property="og:description" content="Design System and Component Library for Modulz" />

        <meta name="twitter:url" content="https://nucleus.modulz.app/" />
        <meta name="twitter:image" content="https://nucleus.modulz.app/social/hero.png" />
        <meta name="twitter:title" content="Nucleus" />
        <meta name="twitter:description" content="Design System and Component Library for Modulz" />
        <meta name="twitter:site" content="@modulz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@modulz" />
      </Helmet>
      {children}
    </>
  );
}

export default Layout;
