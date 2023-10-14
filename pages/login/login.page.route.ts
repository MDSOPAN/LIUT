export default (pageContext: any) => {
  // Only render the login page to non-authenticated users

  if (userIsLoggedIn(pageContext)) {
    return false;
  }

  return {
    // We override all other routes by setting a high `precedence` value of `99`.
    // This means that *all* URLs render the login page (if the user isn't authenticated).
    precedence: 99,
  };
};

const userIsLoggedIn = (pageContext: any) => {
  let hash = pageContext.hash;
  let storedhash = pageContext.storedhash;
  if (hash == storedhash) {
    return true;
  } else {
    return false;
  }
};
