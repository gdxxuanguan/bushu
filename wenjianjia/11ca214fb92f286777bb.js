class Observer{constructor(e){this.observe(e)}observe(e){e&&"object"==typeof e&&Object.keys(e).forEach((s=>{this.defineReactive(e,s,e[s]),this.observe(e[s])}))}defineReactive(e,s,t){let r=this,o=new Dep;Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>(Dep.target&&o.addSub(Dep.target),t),set(e){e!==t&&(r.observe(e),t=e,o.notify())}})}}class Dep{constructor(){this.subs=[]}addSub(e){this.subs.push(e)}notify(){this.subs.forEach((e=>e.update()))}}module.exports={Observer,Dep};