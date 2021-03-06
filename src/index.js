import main from './main';
import Reveal from 'reveal.js';

import './style.css';
import 'reveal.js/css/reveal.css';
// Themes: beige, black, blood, league, moon, night, serif, simple, sky, solarized, white
import 'reveal.js/css/theme/league.css';
// Theme used for syntax highlighting of code
import 'reveal.js/lib/css/zenburn.css';

// configuration see https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    history: true,
    transition: 'none', // none/fade/slide/convex/concave/zoom
    hideAddressBar: true,
    dependencies: [
        // DONT LOAD PLUGINS HERE!
        // use require() for plugins after Reveal.initialize()
    ],
    // parallaxBackgroundImage: (window.location.search.match( /print-pdf/gi )) ? null :'img/background.jpg',
    // parallaxBackgroundSize: '3648px 2056px',
    pdfSeparateFragments: false,
});

// Load plugins here
// require('imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/highlight/highlight');
// require('imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/markdown/marked');
// require('imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/markdown/markedown');
// require('imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/notes/notes'); // NOT WORKING!!
require('imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/zoom-js/zoom');

main.run();
