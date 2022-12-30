import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@lpp/root-config",
  app: () => System.import("https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"),
  activeWhen: (location) => location.pathname === '/',
});

start({
  urlRerouteOnly: true,
});
