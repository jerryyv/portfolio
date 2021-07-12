// rough notation animations 
import { annotate, annotationGroup } from 'https://unpkg.com/rough-notation?module';

// highlights
const h1 = annotate(document.querySelector('#highlight-1'), {type:'highlight', color:'#fbec5d', multiline: true, iterations: 1, animationDuration: 500})
const h2 = annotate(document.querySelector('#highlight-2'), {type:'highlight', color:'#98fb98', multiline: true, iterations: 1, animationDuration: 500 })
const h3 = annotate(document.querySelector('#highlight-3'), {type:'highlight', color:'#ace5ee', multiline: true, iterations: 1, animationDuration: 500 })


// underlines
const u1 = annotate(document.querySelector('#underline-1'), {type: 'underline', animationDuration: 500 })
const u2 = annotate(document.querySelector('#projects-title'), {type: 'underline', animate:false })


const ag = annotationGroup([u1, h1, h2, h3, u2]);
ag.show()


