/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated since last save.` + `Reload to display most current information?`
  );
  if (answer === true) {
    window.location.reload();
  }
};

// You can delete this file if you're not using it
