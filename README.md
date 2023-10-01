# Car Connect Exam

This is the main app for running and displaying the front end. It utilizes several technologies:

- [Next Js](https://nextjs.org/docs/)
- [React](https://reactjs.org/docs/getting-started.html)
- [Redux](https://redux.js.org/api/api-reference)
- [Thunk](https://github.com/reduxjs/redux-thunk)
- [Express](https://expressjs.com/en/4x/api.html)
- [TailWindCss](https://tailwindcss.com/)
- [PostCSS](https://github.com/postcss/postcss)
- [Next Optimized Images](https://github.com/cyrilwanner/next-optimized-images)

## Run The Application

### Install it

```javascript
npm install
```

### Setup Local Environment

`cp .env.example .env`

Edit `.env` updating the instances of `REPLACE_THIS` with appropriate values.

### Run It.

Hot reload is in place so any changes you make, besides `server.js` will automatically recompile the app and reload in your browser.

```javascript
npm run dev
```

### Use It

<http://localhost:4000/>

### Test It

Mocha / Chai has been setup and configured to run with babel. To run some preliminary tests against this suite:

```javascript
npm run test
```

### Stylesheets, Tailwind and PurgeCSS

Tailwind's PurgeCSS feature can be a bit overzealous when purging style rules it thinks aren't in use. To avoid CSS rules from being purged, wrap them (or the whole stylesheet) in the following:


```css
/* purgecss start ignore */
  ...your style rules here...
/* purgecss end ignore */

```

Additionally, you can whitelist specific style selectors from `next.config.js` under `withBundleAnalyzer` -> `withPurgeCss` -> `purgeCss` -> `whitelist`.  The styles for the selectors added here will not be purged.

If you create a new page under `pages` and need to add styles for it, put the stylesheet under `assets/pages/`.
