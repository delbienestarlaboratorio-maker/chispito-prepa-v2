// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: ["/*"],
  exclude: ["/_next/static/*", "/ads.txt", "/robots.txt"]
};

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "d:\\Paginas_web\\Sistema educacion Basica\\Chispito.prepa\\.wrangler\\tmp\\pages-90aex8\\bundledWorker-0.6471221947562719.mjs";
import { isRoutingRuleMatch } from "d:\\Paginas_web\\Sistema educacion Basica\\Chispito.prepa\\node_modules\\wrangler\\templates\\pages-dev-util.ts";
export * from "d:\\Paginas_web\\Sistema educacion Basica\\Chispito.prepa\\.wrangler\\tmp\\pages-90aex8\\bundledWorker-0.6471221947562719.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=j02daghhcc.js.map
