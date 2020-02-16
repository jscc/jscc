import e from"shortid";var t=new class{addEvent(e,t,s,r){var i,n,o;null==r&&(r=!0);try{o=!!window.navigator.msPointerEnabled}catch(e){o=!1}try{i="ontouchstart"in document&&!isPC()}catch(e){i=!1}try{n=!!("ontouchstart"in document&&isPC())}catch(e){n=!1}var a=null;if(o)switch(t){case"mousedown":t="MSPointerDown";break;case"mousemove":t="MSPointerMove";break;case"mouseup":t="MSPointerUp";break;case"mouseover":t="MSPointerOver";break;case"mouseout":t="MSPointerOut"}else if(i)switch(t){case"mousedown":t="touchstart";break;case"mousemove":t="touchmove";break;case"mouseup":t="touchend";break;case"mouseover":case"mouseout":t=""}if(n)switch(t){case"mousedown":a="touchstart";break;case"mousemove":a="touchmove";break;case"mouseup":a="touchend";break;case"mouseover":case"mouseout":a=""}""!=t&&(e._plisteners||(e._plisteners={}),e._plisteners[t]=s,e.addEventListener?e.addEventListener(t,s,r):e.attachEvent?e.attachEvent("on"+t,s):e["on"+t]=s,a&&(e.addEventListener?e.addEventListener(a,s,r):e.attachEvent?e.attachEvent("on"+a,s):e["on"+a]=s))}removeEvent(e,t,s,r){var i,n,o;null==r&&(r=!0);try{o=!!window.navigator.msPointerEnabled}catch(e){o=!1}try{i="ontouchstart"in document&&!isPC()}catch(e){i=!1}try{n=!!("ontouchstart"in document&&isPC())}catch(e){n=!1}var a=null;if(o)switch(t){case"mousedown":t="MSPointerDown";break;case"mousemove":t="MSPointerMove";break;case"mouseup":t="MSPointerUp";break;case"mouseover":t="MSPointerOver";break;case"mouseout":t="MSPointerOut"}else if(i)switch(t){case"mousedown":t="touchstart";break;case"mousemove":t="touchmove";break;case"mouseup":t="touchend";break;case"mouseover":case"mouseout":t=""}if(n)switch(t){case"mousedown":a="touchstart";break;case"mousemove":a="touchmove";break;case"mouseup":a="touchend";break;case"mouseover":case"mouseout":a=""}e._plisteners&&delete e._plisteners[t],e.removeEventListener?e.removeEventListener(t,s,r):e.detachEvent?e.detachEvent("on"+t,s):e["on"+t]=null,a&&(e.removeEventListener?e.removeEventListener(a,s,r):e.detachEvent?e.detachEvent("on"+a,s):e["on"+a]=null)}isPC(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],s=!0,r=0;r<t.length;r++)if(e.indexOf(t[r])>0){s=!1;break}return s}};class s{constructor(){this.el=null,this.vn=null}}class r extends Map{constructor(){super()}}var i=new r;class n{constructor(e){this.mFragment=e}newFragment(e,t){t||(t=this.mFragment);let r=null;if(e._isVdom){r=document.createElement(e.type),r.__ez__eid=e._eid;let t=new s;t.el=r,t.vn=e,i.set(e._eid,t)}else r=e.el;if(t.appendChild(r),this._updateNode(e),e.children&&e.children.length){let t=e.children.length;for(var n=0;n<t;n++)this.newFragment(e.children[n],r)}}render(e){let t=e.get("node"),s=t._eid,r=null;switch(e.get("cmd")){case"del":r=i.get(s),r&&r.el&&r.el.parentNode&&r.el.parentNode.removeChild(r.el),i.delete(s);break;case"add":r=i.get(e.get("parent")._eid),this.newFragment(t,r.el);break;case"mod":this._updateNode(t)}}_updateNode(e){let s=i.get(e._eid);if(s){let i=s.el;if(e._attr)for(var r in e._attr){let t=e._attr[r];t instanceof Array&&(t.length?t=t.join(" "):(t=null,i.removeAttribute(r))),t&&i.getAttribute(r)!=t&&i.setAttribute(r,t)}if(e._listener){for(var r in i._plisteners)e._listener[r]||t.removeEvent(i,r,this.handlerProxy);for(var r in e._listener)i._plisteners&&i._plisteners[r]||t.addEvent(i,r,this.handlerProxy)}}}handlerProxy(e){if(!(e=e||event))return void console.warn("evt is undefined");if(!e.target.__ez__eid)return void console.warn("not found element");let t=i.get(e.target.__ez__eid),s=t.vn._listener[e.type];s&&s(t.vn)}}var o=new class{constructor(){this.isInit=!1}render(e){this.isInit&&e.forEach(e=>{let t=new n(this.newVContainer());t.render(e),t=null})}init(e,t){if(this.isInit)return;let r=document.getElementById(t);if(r){let t="puc"+(Math.floor(2e3*Math.random())+100);r._eid=t;let o=new s;o.el=r,i.set(t,o);let a=new n(this.newVContainer());a.newFragment(e),r.appendChild(a.mFragment),a=null,this.isInit=!0}}newVContainer(){return document.createDocumentFragment()}};var a=new class{constructor(){this.renderTime=20,this.timeId=0,this.shell_add="add",this.shell_del="del",this.shell_mod="mod",this.ctrl_class="class",this.ctrl_attr="attr",this.ctrl_text="text",this.ctrl_node="node",this.ctrl_event="event",this.tasks=[],this.shells=new Map}push(){0===this.timeId&&(this.timeId=setInterval(()=>{o.render(this.shells),this.shells.clear(),this.timeId=0},this.renderTime))}commit(e,t,s,r){if(!o.isInit)return;let i=this.shells.get(s._eid);if(i)i.get("cmd")===this.shell_mod?i.set("cmd",e):e!==this.shell_mod&&i.set("cmd",e);else{let t=new Map;t.set("cmd",e),t.set("node",s),this.shells.set(s._eid,t)}r&&this.shells.get(s._eid).set("parent",r),this.push()}};class h{constructor(){this.el=new Text,this._isVdom=!1}set text(e){this.el.data!=e&&(this.el.data=e)}get text(){return this.el.data}}class l extends class{constructor(){this._eid=e.generate(),this._ename="ezobj",this._isVdom=!0}}{constructor(e){super(),this.type=e||"div",this._attr={class:[],value:void 0,id:void 0},this.children=[],this._listener={},this.ezText=null,this._text=null}on(e,t,s){this._listener[e]=t.bind(s||this),a.commit(a.shell_mod,a.ctrl_event,this,null)}off(e,t){delete this._listener[e],a.commit(a.shell_mod,a.ctrl_event,this,null)}add(e){return this.children.push(e),a.commit(a.shell_add,a.ctrl_node,e,this),this}remove(e){for(var t=this.children.length-1;t>=0;t--){let s=this.children[t];if(e._elId===s._elId){this.children.splice(t,1);break}}for(var s in a.commit(a.shell_del,a.ctrl_node,e,this),this){let t=this[s];if(t&&t._ename&&t._eid===e._eid){delete this[s];break}}return this}addAttr(e,t){this._attr[e]=t,a.commit(a.shell_mod,a.ctrl_attr,this,null)}removeAttr(e,t){delete this._attr[e],a.commit(a.shell_mod,a.ctrl_attr,this,null)}addClass(e){this._attr.class.push(e),a.commit(a.shell_mod,a.ctrl_attr,this,null)}removeClass(e){this._attr.class=this._attr.class.filter(t=>t!==e),a.commit(a.shell_mod,a.ctrl_attr,this,null)}set value(e){this._attr.value!==e&&(this._attr._value=e,a.commit(a.shell_mod,a.ctrl_text,this,null))}get value(){return this._attr._value}set id(e){this._attr.id!==e&&(this._attr.id=e,a.commit(a.shell_mod,a.ctrl_text,this,null))}get id(){return this._attr.id}set text(e){if(this.ezText||(this.ezText=new h,this.add(this.ezText)),this.ezText.text!==e)return this.ezText.text=e,this}get text(){return this.ezText?this.ezText.text:""}}class d extends l{constructor(){super("a"),this.addClass("link"),this.addAttr("href","javascript:")}}class c extends l{constructor(){super("img")}set src(e){this._attr.src=e}get src(){return this._attr.src}}class u extends l{}class m extends l{constructor(){super("input")}}class _{constructor(){this.container=null,this.routerArray=[],this.routerMap=new Map,this.history=[],this.currentRouteName=""}set routers(e){this.routerArray=e,e.forEach(e=>{this.routerMap.set(e.name,e)})}add(e,t){let s={name:e,node:t};this.routers.push(s),this.routerMap.set(e,s)}to(e){if(e===this.currentRouteName)return;let t=this.routerMap.get(e).node;if(this.container.add(t),this.history.length){let e=this.history[this.history.length-1];this.container.remove(e)}this.history.push(t),this.currentRouteName=e}back(){if(this.history.length>1){let e=this.history.pop();this.container.remove(e),e=this.history.pop(),this.container.add(e)}}}var v=new class{constructor(){this.type="Body",this.Node=l,this.Link=d,this.Image=c,this.Video=u,this.Input=m,this.Router=_,this.appId="app"}render(e){o.init(e,this.appId)}renderTo(e,t){this.appId=t,this.render(e)}};export default v;
