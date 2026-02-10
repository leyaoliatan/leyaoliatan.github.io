step1: run local to check: npm start
step2: check the files and make changes
    -- Note: to change main content first page: /Users/leyaotan/Library/CloudStorage/OneDrive-UBC/Personal/leyaoliatan.github.io/src/components/MainContent.js
    -- to change the fun facts:/Users/leyaotan/Library/CloudStorage/OneDrive-UBC/Personal/leyaoliatan.github.io/src/data/about.md
    -- to chaneg the timeline: /Users/leyaotan/Library/CloudStorage/OneDrive-UBC/Personal/leyaoliatan.github.io/src/components/Timeline/Timeline.js
    -- to change degrees on the education page: /Users/leyaotan/Library/CloudStorage/OneDrive-UBC/Personal/leyaoliatan.github.io/src/data/resume/degrees.js
    -- to change projects: /Users/leyaotan/Library/CloudStorage/OneDrive-UBC/Personal/leyaoliatan.github.io/src/data/projects.js

step3: pre deploy by npm run predeploy
step4: check github - project - action, to see if it runs;
otherwise, check the github page yml for settings;
---

the route file defines the nevigation line;
data for all pages is stored in data;
layout of all pages is stored in pages;
there are also some pages defined in component;

the main page is defined in maincontent.js

if you change the name of the route path, you need to change all file names as well!!