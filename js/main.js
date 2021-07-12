// rough notation animations 
import { annotate, annotationGroup } from 'https://unpkg.com/rough-notation?module';

// highlights
const h1 = annotate(document.querySelector('#h1'), {type:'highlight', color:'#fbec5d', multiline: true, iterations: 1, animationDuration: 500})
const h2 = annotate(document.querySelector('#h2'), {type:'highlight', color:'#98fb98', multiline: true, iterations: 1, animationDuration: 500 })
const h3 = annotate(document.querySelector('#h3'), {type:'highlight', color:'#ace5ee', multiline: true, iterations: 1, animationDuration: 500 })
const h4 = annotate(document.querySelector('#h4'), {type:'highlight', color:'#fbec5d', multiline: true, iterations: 1, animationDuration: 500 })
const h5 = annotate(document.querySelector('#h5'), {type:'highlight', color:'#98fb98', multiline: true, iterations: 1, animationDuration: 500 })
const h6 = annotate(document.querySelector('#h6'), {type:'highlight', color:'#ace5ee', multiline: true, iterations: 1, animationDuration: 500 })

// underlines
const u1 = annotate(document.querySelector('#u1'), {type: 'underline', animationDuration: 500 })
const u2 = annotate(document.querySelector('#projects-title'), {type: 'underline', animate:false })



const titles = document.querySelectorAll('.project-text-title');

const showUnderline = () => {
    for (let i=0; i<titles.length; i++) {
        const a = annotate(titles[i], {type: 'underline', color:'#8b0000'})
        a.show()
    }
}

const ag = annotationGroup([u1, h1, h2, h3, h4, h5, h6, u2]);
ag.show()
//   showUnderline()

