const f=({targetDate:e,currentDate:r=new Date})=>{const t=e.getTime()-r.getTime();return Math.max(Math.floor(t/1e3),0)},A=e=>{const r=Math.floor(e/86400),t=Math.floor(e%(3600*24)/3600),o=Math.floor(e%3600/60),n=e%60;return{days:r,hours:t,minutes:o,seconds:n}},C=Object.freeze(["A","B","C","D","E","F","G"]),E=Object.freeze({0:["A","B","C","D","E","F"],1:["B","C"],2:["A","B","G","E","D"],3:["A","B","G","C","D"],4:["F","G","B","C"],5:["A","F","G","C","D"],6:["A","F","E","D","C","G"],7:["A","B","C"],8:["A","B","C","D","E","F","G"],9:["A","B","C","D","F","G"]}),u=(e,r,t,o)=>{const n=e,a=e+t,$=r-o/2,c=r,s=r+o/2;return`${n},${c} ${n+10},${$} ${a-10},${$}
   ${a},${c} ${a-10},${s} ${n+10},${s}`},D=(e,r,t,o)=>{const n=e-t/2,a=e,$=e+t/2,c=r,s=r+o;return`${a},${c} ${$},${c+10} ${$},${s-10}
   ${a},${s} ${n},${s-10} ${n},${c+10}`},G=e=>{switch(e){case"A":return u(10,10,80,15);case"B":return D(90,10,15,80);case"C":return D(90,90,15,80);case"D":return u(10,170,80,15);case"E":return D(10,90,15,80);case"F":return D(10,10,15,80);case"G":return u(10,90,80,15);default:return""}},i=(e,r)=>{let t=String(e);for(;t.length<r;)t="0"+t;return t};export{C as SEGMENT_KEY,E as SEGMENT_MAP,f as calculateTimeLeft,u as createHorizontalSegmentPoints,A as formatTimeLeft,G as getPoints,i as zeroPad};
//# sourceMappingURL=index.mjs.map
