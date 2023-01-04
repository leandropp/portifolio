import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@lpp/portifolio-hero",
  app: () => System.import("@lpp/portifolio-hero"),
  activeWhen: (location) => location.pathname === '/',
});

start({
  urlRerouteOnly: true,
});
