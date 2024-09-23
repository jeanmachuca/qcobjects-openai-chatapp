"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
/*
* The next values are the default settings
* You can change any value in runtime by using CONFIG.set
* or changing the static initial value in a config.json file
*/
qcobjects_1.CONFIG.set("sourceType", "module");
qcobjects_1.CONFIG.set("relativeImportPath", "js/packages/");
qcobjects_1.CONFIG.set("componentsBasePath", "templates/components/");
qcobjects_1.CONFIG.set("delayForReady", 1); // delay to wait before executing the first ready event, it includes imports
qcobjects_1.CONFIG.set("preserveComponentBodyTag", false); // don't use <componentBody></componentBody> tag
qcobjects_1.CONFIG.set("useConfigService", false); // Load settings from config.json
qcobjects_1.CONFIG.set("routingWay", "pathname"); // routingWay possible values are 'hash','pathname','search'
qcobjects_1.CONFIG.set("useLocalSDK", true); // on the frontend side you can chose whether to load the SDK from sdk.qcobjects.dev or from your local website
qcobjects_1.CONFIG.set("tplextension", "tpl.html"); // this is the file extension to locate the template files (if component.name = 'main' then template name will be main.tpl.html)
qcobjects_1.CONFIG.set("asynchronousImportsLoad", true); // it is recommended to load the Import declarations in an asyncronous way
qcobjects_1.CONFIG.set("serviceWorkerURI", "/sw.js"); // QCObjects will register an launch this service worker automatically to work offline
qcobjects_1.CONFIG.set("overrideComponentTag", true);
// if Component.cached is true, all the Class('Component') declarations will save the template in a localStorage cache
// until a cached=false attribute is found in a <component> html declaration
qcobjects_1.Component.cached = true; // this will load js/packages/org.quickcorp.custom.js file
