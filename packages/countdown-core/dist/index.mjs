const l=({targetDate:e,currentDate:r=new Date})=>{const t=e.getTime()-r.getTime();return Math.max(Math.floor(t/1e3),0)},f=e=>{const r=Math.floor(e/86400),t=Math.floor(e%(3600*24)/3600),n=Math.floor(e%3600/60),o=e%60;return{days:r,hours:t,minutes:n,seconds:o}},u=(e,r,t,n)=>{const o=e,a=e+t,$=r-n/2,s=r,c=r+n/2;return`${o},${s} ${o+10},${$} ${a-10},${$}
   ${a},${s} ${a-10},${c} ${o+10},${c}`},i=(e,r,t,n)=>{const o=e-t/2,a=e,$=e+t/2,s=r,c=r+n;return`${a},${s} ${$},${s+10} ${$},${c-10}
   ${a},${c} ${o},${c-10} ${o},${s+10}`},h=e=>{switch(e){case"A":return u(10,10,80,15);case"B":return i(90,10,15,80);case"C":return i(90,90,15,80);case"D":return u(10,170,80,15);case"E":return i(10,90,15,80);case"F":return i(10,10,15,80);case"G":return u(10,90,80,15);default:return""}},m=(e,r)=>{let t=String(e);for(;t.length<r;)t="0"+t;return t};export{l as calculateTimeLeft,u as createHorizontalSegmentPoints,f as formatTimeLeft,h as getPoints,m as zeroPad};
//# sourceMappingURL=index.mjs.map
