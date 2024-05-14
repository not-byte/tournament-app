import teams from './teams.json';

export default defineEventHandler(event => new Promise(resolve =>
  setTimeout(() => resolve(teams
    .sort((a, b) => a.name.localeCompare(b.name))), 1000)
  //.map(({ name, category }) => ({ name, category }))
));
