# Punk API with vite and React

- API: https://punkapi.com/
- Demo website: https://mfrachet.github.io/vite-react-punk-api/

## TODO

- [x] Display on the homepage a data list of 10-15 items
- [x] Have the possibility to search in this data list via a search field (a simple/exact search will be enough)
- [x] On this homepage display 2 items (random) that change every 10 seconds
- [x] Create a detail page on another URL to display the details of this item

## Requirements

- [x] Node.js v18.x (https://nodejs.org/en/)
- [x] React v18.x (https://reactjs.org/)
- [x] Typescript v5.x (https://typescriptlang.org/)
- [x] Do tests via React Testing Library
- [x] Client side routing (React Router 6 without `loader` API since using a hook library)
- [x] React Hooks library for data fetching (React Query 4)

## Bonus

### Add animations

- [x] Added a basic translateX animation for showing items in the list
- [x] Added a fade-in/out infinite repeat for the placeholders

### Have a Lighthouse performance score of 80+ in mobile, and 90+ in desktop

I wasn't sure about the preset to use since my machine is quite performant with a good network connection. Result will vary on machine anyways. I've made a Webpage test simulation on 4G America just in case => https://www.webpagetest.org/result/231115_AiDc9P_4A8/

### Add some CI/CD

- [x] Added basic CI checks (build/lint/test)
- [x] Deployed to `gh-pages` when merged on main

### Libraries

- [x] CSS-in_JS: styled-components
- [ ] Spring physics animation library: not found a useful usecase so I avoided (note that I've never used those kind of libs)
