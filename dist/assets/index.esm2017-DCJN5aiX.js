import{V as Ci,_ as Ei,W as Ii,X as _e,Y as Ti,Z as wi,$ as ts,a0 as Si,a1 as Ni,a2 as Mt,a3 as k,a4 as f,a5 as Dt,a6 as Y,a7 as he,a8 as Be,a9 as Ri,aa as bi,ab as ki,ac as De,ad as xi,ae as Pi,af as mn,ag as Ai,ah as Mi,ai as Ot,aj as Di,ak as Oi,al as Li,am as yn,an as ns,ao as Fi,ap as Wi,aq as it,ar as Ui,as as qi,at as Vi}from"./index-CcQcy7fF.js";var vn={};const Cn="@firebase/database",En="1.0.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss="";function Gi(n){ss=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),k(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Dt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Y(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Hi(e)}}catch(e){}return new Bi},X=is("localStorage"),Yi=is("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new Ni("@firebase/database"),Qi=function(){let n=1;return function(){return n++}}(),rs=function(n){const e=Ri(n),t=new bi;t.update(e);const s=t.digest();return ki.encodeByteArray(s)},Oe=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Oe.apply(null,s):typeof s=="object"?e+=k(s):e+=s,e+=" "}return e};let Ie=null,In=!0;const zi=function(n,e){f(!0,"Can't turn on custom loggers persistently."),le.logLevel=Mi.VERBOSE,Ie=le.log.bind(le)},A=function(...n){if(In===!0&&(In=!1,Ie===null&&Yi.get("logging_enabled")===!0&&zi()),Ie){const e=Oe.apply(null,n);Ie(e)}},Le=function(n){return function(...e){A(n,...e)}},Et=function(...n){const e="FIREBASE INTERNAL ERROR: "+Oe(...n);le.error(e)},H=function(...n){const e="FIREBASE FATAL ERROR: ".concat(Oe(...n));throw le.error(e),new Error(e)},O=function(...n){const e="FIREBASE WARNING: "+Oe(...n);le.warn(e)},Ki=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&O("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},os=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ji=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ue="[MIN_NAME]",Z="[MAX_NAME]",pe=function(n,e){if(n===e)return 0;if(n===ue||e===Z)return-1;if(e===ue||n===Z)return 1;{const t=Tn(n),s=Tn(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},$i=function(n,e){return n===e?0:n<e?-1:1},ye=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+k(e))},Lt=function(n){if(typeof n!="object"||n===null)return k(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=k(e[s]),t+=":",t+=Lt(n[e[s]]);return t+="}",t},ls=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function L(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const as=function(n){f(!os(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(a=0;a<64;a+=8){let d=parseInt(h.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},Xi=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ji=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Zi(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const er=new RegExp("^-?(0*)\\d{1,10}$"),tr=-2147483648,nr=2147483647,Tn=function(n){if(er.test(n)){const e=Number(n);if(e>=tr&&e<=nr)return e}return null},ge=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw O("Exception was thrown by user callback.",t),e},Math.floor(0))}},sr=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Te=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Ai(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){O('Provided AppCheck credentials for the app named "'.concat(this.appName,'" are invalid. This usually indicates your app was not initialized correctly.'))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(A("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',O(e)}}class He{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}He.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="5",cs="v",hs="s",us="r",ds="f",fs=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,_s="ls",ps="p",It="ac",gs="websocket",ms="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1,c=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=X.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&X.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):"";return"".concat(e).concat(this.host,"/").concat(t)}}function or(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function vs(n,e,t){f(typeof e=="string","typeof type must == string"),f(typeof t=="object","typeof params must == object");let s;if(e===gs)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===ms)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);or(n)&&(t.ns=n.namespace);const i=[];return L(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.counters_={}}incrementCounter(e,t=1){Y(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Wi(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t={},pt={};function Wt(n){const e=n.toString();return _t[e]||(_t[e]=new lr),_t[e]}function ar(n,e){const t=n.toString();return pt[t]||(pt[t]=e()),pt[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ge(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="start",hr="close",ur="pLPCommand",dr="pRTLPCB",Cs="id",Es="pw",Is="ser",fr="cb",_r="seg",pr="ts",gr="d",mr="dframe",Ts=1870,ws=30,yr=Ts-ws,vr=25e3,Cr=3e4;class oe{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Le(e),this.stats_=Wt(t),this.urlFn=a=>(this.appCheckToken&&(a[It]=this.appCheckToken),vs(t,ms,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new cr(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Cr)),ji(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ut((...r)=>{const[o,l,a,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===wn)this.id=l,this.password=a;else if(o===hr)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[wn]="t",s[Is]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[fr]=this.scriptTagHolder.uniqueCallbackIdentifier),s[cs]=Ft,this.transportSessionId&&(s[hs]=this.transportSessionId),this.lastSessionId&&(s[_s]=this.lastSessionId),this.applicationId&&(s[ps]=this.applicationId),this.appCheckToken&&(s[It]=this.appCheckToken),typeof location<"u"&&location.hostname&&fs.test(location.hostname)&&(s[us]=ds);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){oe.forceAllow_=!0}static forceDisallow(){oe.forceDisallow_=!0}static isAvailable(){return oe.forceAllow_?!0:!oe.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Xi()&&!Ji()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=k(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ui(t),i=ls(s,yr);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[mr]="t",s[Cs]=e,s[Es]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=k(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ut{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Qi(),window[ur+this.uniqueCallbackIdentifier]=e,window[dr+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ut.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){A("frame writing exception"),l.stack&&A(l.stack),A(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||A("No IE domain setting required")}catch(t){const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Cs]=this.myID,e[Es]=this.myPW,e[Is]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ws+s.length<=Ts;){const o=this.pendingSegs.shift();s=s+"&"+_r+i+"="+o.seg+"&"+pr+i+"="+o.ts+"&"+gr+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(vr)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{A("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch(s){}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=16384,Ir=45e3;let Ye=null;typeof MozWebSocket<"u"?Ye=MozWebSocket:typeof WebSocket<"u"&&(Ye=WebSocket);class F{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Le(this.connId),this.stats_=Wt(t),this.connURL=F.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[cs]=Ft,typeof location<"u"&&location.hostname&&fs.test(location.hostname)&&(o[us]=ds),t&&(o[hs]=t),s&&(o[_s]=s),i&&(o[It]=i),r&&(o[ps]=r),vs(e,gs,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,X.set("previous_websocket_failure",!0);try{let s;qi(),this.mySock=new Ye(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){F.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ye!==null&&!F.forceDisallow_}static previouslyFailed(){return X.isInMemoryStorage||X.get("previous_websocket_failure")===!0}markConnectionHealthy(){X.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Dt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=k(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ls(t,Er);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ir))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}F.responsesRequiredToBeHealthy=2;F.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{static get ALL_TRANSPORTS(){return[oe,F]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=F&&F.isAvailable();let s=t&&!F.previouslyFailed();if(e.webSocketOnly&&(t||O("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[F];else{const i=this.transports_=[];for(const r of Re.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Re.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Re.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=6e4,wr=5e3,Sr=10*1024,Nr=100*1024,gt="t",Sn="d",Rr="s",Nn="r",br="e",Rn="o",bn="a",kn="n",xn="p",kr="h";class xr{constructor(e,t,s,i,r,o,l,a,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Le("c:"+this.id+":"),this.transportManager_=new Re(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Te(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Nr?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Sr?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(gt in e){const t=e[gt];t===bn?this.upgradeIfSecondaryHealthy_():t===Nn?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Rn&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ye("t",e),s=ye("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:xn,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:bn,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:kn,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ye("t",e),s=ye("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ye(gt,e);if(Sn in e){const s=e[Sn];if(t===kr){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===kn){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Rr?this.onConnectionShutdown_(s):t===Nn?this.onReset_(s):t===br?Et("Server Error: "+s):t===Rn?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Et("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ft!==s&&O("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Te(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Tr))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Te(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(wr))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:xn,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(X.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends Ns{static getInstance(){return new Qe}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ns()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=32,An=768;class I{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function C(){return new I("")}function m(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function z(n){return n.pieces_.length-n.pieceNum_}function T(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new I(n.pieces_,e)}function Rs(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Pr(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function bs(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ks(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new I(e,0)}function N(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof I)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new I(t,0)}function v(n){return n.pieceNum_>=n.pieces_.length}function M(n,e){const t=m(n),s=m(e);if(t===null)return e;if(t===s)return M(T(n),T(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function qt(n,e){if(z(n)!==z(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function W(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(z(n)>z(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Ar{constructor(e,t){this.errorPrefix_=t,this.parts_=bs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=it(this.parts_[s]);xs(this)}}function Mr(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=it(e),xs(n)}function Dr(n){const e=n.parts_.pop();n.byteLength_-=it(e),n.parts_.length>0&&(n.byteLength_-=1)}function xs(n){if(n.byteLength_>An)throw new Error(n.errorPrefix_+"has a key path longer than "+An+" bytes ("+n.byteLength_+").");if(n.parts_.length>Pn)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Pn+") or object contains a cycle "+$(n))}function $(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Ns{static getInstance(){return new Vt}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=1e3,Or=60*5*1e3,Mn=30*1e3,Lr=1.3,Fr=3e4,Wr="server_kill",Dn=3;class G extends Ss{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=G.nextPersistentConnectionId_++,this.log_=Le("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ve,this.maxReconnectDelay_=Or,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vt.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Qe.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(k(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Ot,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;G.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Y(e,"w")){const s=he(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();O("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ".concat(i," at ").concat(r," to your security rules for better performance."))}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Oi(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Mn)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Li(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+k(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Et("Unrecognized action received from server: "+k(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ve,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ve,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Fr&&(this.reconnectDelay_=ve),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Lr)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+G.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(u){f(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?A("getToken() completed but was canceled"):(A("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,l=new xr(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,_=>{O(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Wr)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&O(u),a())}}}interrupt(e){A("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){A("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yn(this.interruptReasons_)&&(this.reconnectDelay_=ve,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Lt(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new I(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){A("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Dn&&(this.reconnectDelay_=Mn,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){A("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Dn&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ss.replace(/\./g,"-")]=1,ns()?e["framework.cordova"]=1:Fi()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qe.getInstance().currentlyOnline();return yn(this.interruptReasons_)&&e}}G.nextPersistentConnectionId_=0;G.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new y(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new y(ue,e),i=new y(ue,t);return this.compare(s,i)!==0}minPost(){return y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ve;class Ps extends rt{static get __EMPTY_NODE(){return Ve}static set __EMPTY_NODE(e){Ve=e}compare(e,t){return pe(e.name,t.name)}isDefinedOn(e){throw De("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return y.MIN}maxPost(){return new y(Z,Ve)}makePost(e,t){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new y(e,Ve)}toString(){return".key"}}const ae=new Ps;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class b{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s!=null?s:b.RED,this.left=i!=null?i:D.EMPTY_NODE,this.right=r!=null?r:D.EMPTY_NODE}copy(e,t,s,i,r){return new b(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return D.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return D.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,b.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,b.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}b.RED=!0;b.BLACK=!1;class Ur{copy(e,t,s,i,r){return this}insert(e,t,s){return new b(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class D{constructor(e,t=D.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new D(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,b.BLACK,null,null))}remove(e){return new D(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,b.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ge(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ge(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ge(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ge(this.root_,null,this.comparator_,!0,e)}}D.EMPTY_NODE=new Ur;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(n,e){return pe(n.name,e.name)}function Gt(n,e){return pe(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tt;function Vr(n){Tt=n}const As=function(n){return typeof n=="number"?"number:"+as(n):"string:"+n},Ms=function(n){if(n.isLeafNode()){const e=n.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Y(e,".sv"),"Priority must be a string or number.")}else f(n===Tt||n.isEmpty(),"priority of unexpected type.");f(n===Tt||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let On;class R{static set __childrenNodeConstructor(e){On=e}static get __childrenNodeConstructor(){return On}constructor(e,t=R.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ms(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new R(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:R.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return v(e)?this:m(e)===".priority"?this.priorityNode_:R.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:R.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=m(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(f(s!==".priority"||z(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,R.__childrenNodeConstructor.EMPTY_NODE.updateChild(T(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+As(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=as(this.value_):e+=this.value_,this.lazyHash_=rs(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===R.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof R.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=R.VALUE_TYPE_ORDER.indexOf(t),r=R.VALUE_TYPE_ORDER.indexOf(s);return f(i>=0,"Unknown leaf type: "+t),f(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}R.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds,Os;function Gr(n){Ds=n}function Hr(n){Os=n}class Br extends rt{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?pe(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return y.MIN}maxPost(){return new y(Z,new R("[PRIORITY-POST]",Os))}makePost(e,t){const s=Ds(e);return new y(t,new R("[PRIORITY-POST]",s))}toString(){return".priority"}}const S=new Br;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=Math.log(2);class Qr{constructor(e){const t=r=>parseInt(Math.log(r)/Yr,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ze=function(n,e,t,s){n.sort(e);const i=function(a,c){const h=c-a;let u,d;if(h===0)return null;if(h===1)return u=n[a],d=t?t(u):u,new b(d,u.node,b.BLACK,null,null);{const _=parseInt(h/2,10)+a,p=i(a,_),E=i(_+1,c);return u=n[_],d=t?t(u):u,new b(d,u.node,b.BLACK,p,E)}},r=function(a){let c=null,h=null,u=n.length;const d=function(p,E){const P=u-p,ie=u;u-=p;const qe=i(P+1,ie),ft=n[P],vi=t?t(ft):ft;_(new b(vi,ft.node,E,null,qe))},_=function(p){c?(c.left=p,c=p):(h=p,c=p)};for(let p=0;p<a.count;++p){const E=a.nextBitIsOne(),P=Math.pow(2,a.count-(p+1));E?d(P,b.BLACK):(d(P,b.BLACK),d(P,b.RED))}return h},o=new Qr(n.length),l=r(o);return new D(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mt;const re={};class V{static get Default(){return f(re&&S,"ChildrenNode.ts has not been loaded"),mt=mt||new V({".priority":re},{".priority":S}),mt}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=he(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof D?t:null}hasIndex(e){return Y(this.indexSet_,e.toString())}addIndex(e,t){f(e!==ae,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(y.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ze(s,e.getCompare()):l=re;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new V(h,c)}addToIndexes(e,t){const s=Be(this.indexes_,(i,r)=>{const o=he(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),i===re)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(y.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),ze(l,o.getCompare())}else return re;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new y(e.name,l))),a.insert(e,e.node)}});return new V(s,this.indexSet_)}removeFromIndexes(e,t){const s=Be(this.indexes_,i=>{if(i===re)return i;{const r=t.get(e.name);return r?i.remove(new y(e.name,r)):i}});return new V(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ce;class g{static get EMPTY_NODE(){return Ce||(Ce=new g(new D(Gt),null,V.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ms(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ce}updatePriority(e){return this.children_.isEmpty()?this:new g(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ce:t}}getChild(e){const t=m(e);return t===null?this:this.getImmediateChild(t).getChild(T(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(f(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new y(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ce:this.priorityNode_;return new g(i,o,r)}}updateChild(e,t){const s=m(e);if(s===null)return t;{f(m(e)!==".priority"||z(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(T(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(S,(o,l)=>{t[o]=l.val(e),s++,r&&g.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+As(this.getPriority().val())+":"),this.forEachChild(S,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":rs(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new y(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new y(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new y(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,y.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,y.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fe?-1:0}withIndex(e){if(e===ae||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new g(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ae||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(S),i=t.getIterator(S);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ae?null:this.indexMap_.get(e.toString())}}g.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class zr extends g{constructor(){super(new D(Gt),g.EMPTY_NODE,V.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return g.EMPTY_NODE}isEmpty(){return!1}}const Fe=new zr;Object.defineProperties(y,{MIN:{value:new y(ue,g.EMPTY_NODE)},MAX:{value:new y(Z,Fe)}});Ps.__EMPTY_NODE=g.EMPTY_NODE;R.__childrenNodeConstructor=g;Vr(Fe);Hr(Fe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=!0;function x(n,e=null){if(n===null)return g.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new R(t,x(e))}if(!(n instanceof Array)&&Kr){const t=[];let s=!1;if(L(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=x(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new y(o,a)))}}),t.length===0)return g.EMPTY_NODE;const r=ze(t,qr,o=>o.name,Gt);if(s){const o=ze(t,S.getCompare());return new g(r,x(e),new V({".priority":o},{".priority":S}))}else return new g(r,x(e),V.Default)}else{let t=g.EMPTY_NODE;return L(n,(s,i)=>{if(Y(n,s)&&s.substring(0,1)!=="."){const r=x(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(x(e))}}Gr(x);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends rt{constructor(e){super(),this.indexPath_=e,f(!v(e)&&m(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?pe(e.name,t.name):r}makePost(e,t){const s=x(e),i=g.EMPTY_NODE.updateChild(this.indexPath_,s);return new y(t,i)}maxPost(){const e=g.EMPTY_NODE.updateChild(this.indexPath_,Fe);return new y(Z,e)}toString(){return bs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends rt{compare(e,t){const s=e.node.compareTo(t.node);return s===0?pe(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return y.MIN}maxPost(){return y.MAX}makePost(e,t){const s=x(e);return new y(t,s)}toString(){return".value"}}const Xr=new $r;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(n){return{type:"value",snapshotNode:n}}function de(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function be(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function ke(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Jr(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){f(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(be(t,l)):f(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(de(t,s)):o.trackChildChange(ke(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(S,(i,r)=>{t.hasChild(i)||s.trackChildChange(be(i,r))}),t.isLeafNode()||t.forEachChild(S,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ke(i,r,o))}else s.trackChildChange(de(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?g.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.indexedFilter_=new Ht(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xe.getStartPost_(e),this.endPost_=xe.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new y(t,s))||(s=g.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=g.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(g.EMPTY_NODE);const r=this;return t.forEachChild(S,(o,l)=>{r.matches(new y(o,l))||(i=i.updateImmediateChild(o,g.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new xe(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new y(t,s))||(s=g.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=g.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=g.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(g.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,g.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,_)=>u(_,d)}else o=this.index_.getCompare();const l=e;f(l.numChildren()===this.limit_,"");const a=new y(t,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(t)){const u=l.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,a);if(h&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ke(t,s,u)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(be(t,u));const E=l.updateImmediateChild(t,g.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(de(d.name,d.node)),E.updateImmediateChild(d.name,d.node)):E}}else return s.isEmpty()?e:h&&o(c,a)>=0?(r!=null&&(r.trackChildChange(be(c.name,c.node)),r.trackChildChange(de(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(c.name,g.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=S}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ue}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Z}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===S}copy(){const e=new Bt;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function eo(n){return n.loadsAllData()?new Ht(n.getIndex()):n.hasLimit()?new Zr(n):new xe(n)}function Ln(n){const e={};if(n.isDefault())return e;let t;if(n.index_===S?t="$priority":n.index_===Xr?t="$value":n.index_===ae?t="$key":(f(n.index_ instanceof jr,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=k(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=k(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+k(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=k(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+k(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Fn(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==S&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends Ss{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Le("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ke.getListenId_(e,s),l={};this.listens_[o]=l;const a=Ln(e._queryParams);this.restRequest_(r+".json",a,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),he(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=Ke.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Ln(e._queryParams),s=e._path.toString(),i=new Ot;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Di(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Dt(l.responseText)}catch(c){O("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&O("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.rootNode_=g.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return{value:null,children:new Map}}function Fs(n,e,t){if(v(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=m(e);n.children.has(s)||n.children.set(s,je());const i=n.children.get(s);e=T(e),Fs(i,e,t)}}function wt(n,e,t){n.value!==null?t(e,n.value):no(n,(s,i)=>{const r=new I(e.toString()+"/"+s);wt(i,r,t)})}function no(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&L(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=10*1e3,io=30*1e3,ro=5*60*1e3;class oo{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new so(e);const s=Wn+(io-Wn)*Math.random();Te(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;L(e,(i,r)=>{r>0&&Y(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Te(this.reportStats_.bind(this),Math.floor(Math.random()*2*ro))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(U||(U={}));function Ws(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yt(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qt(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=U.ACK_USER_WRITE,this.source=Ws()}operationForChild(e){if(v(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new I(e));return new $e(C(),t,this.revert)}}else return f(m(this.path)===e,"operationForChild called for unrelated child."),new $e(T(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t){this.source=e,this.path=t,this.type=U.LISTEN_COMPLETE}operationForChild(e){return v(this.path)?new Pe(this.source,C()):new Pe(this.source,T(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=U.OVERWRITE}operationForChild(e){return v(this.path)?new ee(this.source,C(),this.snap.getImmediateChild(e)):new ee(this.source,T(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=U.MERGE}operationForChild(e){if(v(this.path)){const t=this.children.subtree(new I(e));return t.isEmpty()?null:t.value?new ee(this.source,C(),t.value):new Ae(this.source,C(),t)}else return f(m(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ae(this.source,T(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(v(e))return this.isFullyInitialized()&&!this.filtered_;const t=m(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ao(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Jr(o.childName,o.snapshotNode))}),Ee(n,i,"child_removed",e,s,t),Ee(n,i,"child_added",e,s,t),Ee(n,i,"child_moved",r,s,t),Ee(n,i,"child_changed",e,s,t),Ee(n,i,"value",e,s,t),i}function Ee(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>ho(n,l,a)),o.forEach(l=>{const a=co(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function co(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function ho(n,e,t){if(e.childName==null||t.childName==null)throw De("Should only compare child_ events.");const s=new y(e.childName,e.snapshotNode),i=new y(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(n,e){return{eventCache:n,serverCache:e}}function we(n,e,t,s){return ot(new te(e,t,s),n.serverCache)}function Us(n,e,t,s){return ot(n.eventCache,new te(e,t,s))}function St(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ne(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yt;const uo=()=>(yt||(yt=new D($i)),yt);class w{static fromObject(e){let t=new w(null);return L(e,(s,i)=>{t=t.set(new I(s),i)}),t}constructor(e,t=uo()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:C(),value:this.value};if(v(e))return null;{const s=m(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(T(e),t);return r!=null?{path:N(new I(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(v(e))return this;{const t=m(e),s=this.children.get(t);return s!==null?s.subtree(T(e)):new w(null)}}set(e,t){if(v(e))return new w(t,this.children);{const s=m(e),r=(this.children.get(s)||new w(null)).set(T(e),t),o=this.children.insert(s,r);return new w(this.value,o)}}remove(e){if(v(e))return this.children.isEmpty()?new w(null):new w(null,this.children);{const t=m(e),s=this.children.get(t);if(s){const i=s.remove(T(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new w(null):new w(this.value,r)}else return this}}get(e){if(v(e))return this.value;{const t=m(e),s=this.children.get(t);return s?s.get(T(e)):null}}setTree(e,t){if(v(e))return t;{const s=m(e),r=(this.children.get(s)||new w(null)).setTree(T(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new w(this.value,o)}}fold(e){return this.fold_(C(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(N(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,C(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(v(e))return null;{const r=m(e),o=this.children.get(r);return o?o.findOnPath_(T(e),N(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,C(),t)}foreachOnPath_(e,t,s){if(v(e))return this;{this.value&&s(t,this.value);const i=m(e),r=this.children.get(i);return r?r.foreachOnPath_(T(e),N(t,i),s):new w(null)}}foreach(e){this.foreach_(C(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(N(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.writeTree_=e}static empty(){return new q(new w(null))}}function Se(n,e,t){if(v(e))return new q(new w(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=M(i,e);return r=r.updateChild(o,t),new q(n.writeTree_.set(i,r))}else{const i=new w(t),r=n.writeTree_.setTree(e,i);return new q(r)}}}function Un(n,e,t){let s=n;return L(t,(i,r)=>{s=Se(s,N(e,i),r)}),s}function qn(n,e){if(v(e))return q.empty();{const t=n.writeTree_.setTree(e,new w(null));return new q(t)}}function Nt(n,e){return se(n,e)!=null}function se(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(M(t.path,e)):null}function Vn(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(S,(s,i)=>{e.push(new y(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new y(s,i.value))}),e}function Q(n,e){if(v(e))return n;{const t=se(n,e);return t!=null?new q(new w(t)):new q(n.writeTree_.subtree(e))}}function Rt(n){return n.writeTree_.isEmpty()}function fe(n,e){return qs(C(),n.writeTree_,e)}function qs(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=qs(N(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(N(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(n,e){return Bs(e,n)}function fo(n,e,t,s,i){f(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Se(n.visibleWrites,e,t)),n.lastWriteId=s}function _o(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function po(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);f(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&go(l,s.path)?i=!1:W(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return mo(n),!0;if(s.snap)n.visibleWrites=qn(n.visibleWrites,s.path);else{const l=s.children;L(l,a=>{n.visibleWrites=qn(n.visibleWrites,N(s.path,a))})}return!0}else return!1}function go(n,e){if(n.snap)return W(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&W(N(n.path,t),e))return!0;return!1}function mo(n){n.visibleWrites=Vs(n.allWrites,yo,C()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function yo(n){return n.visible}function Vs(n,e,t){let s=q.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)W(t,o)?(l=M(t,o),s=Se(s,l,r.snap)):W(o,t)&&(l=M(o,t),s=Se(s,C(),r.snap.getChild(l)));else if(r.children){if(W(t,o))l=M(t,o),s=Un(s,l,r.children);else if(W(o,t))if(l=M(o,t),v(l))s=Un(s,C(),r.children);else{const a=he(r.children,m(l));if(a){const c=a.getChild(T(l));s=Se(s,C(),c)}}}else throw De("WriteRecord should have .snap or .children")}}return s}function Gs(n,e,t,s,i){if(!s&&!i){const r=se(n.visibleWrites,e);if(r!=null)return r;{const o=Q(n.visibleWrites,e);if(Rt(o))return t;if(t==null&&!Nt(o,C()))return null;{const l=t||g.EMPTY_NODE;return fe(o,l)}}}else{const r=Q(n.visibleWrites,e);if(!i&&Rt(r))return t;if(!i&&t==null&&!Nt(r,C()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(W(c.path,e)||W(e,c.path))},l=Vs(n.allWrites,o,e),a=t||g.EMPTY_NODE;return fe(l,a)}}}function vo(n,e,t){let s=g.EMPTY_NODE;const i=se(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(S,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Q(n.visibleWrites,e);return t.forEachChild(S,(o,l)=>{const a=fe(Q(r,new I(o)),l);s=s.updateImmediateChild(o,a)}),Vn(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Q(n.visibleWrites,e);return Vn(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Co(n,e,t,s,i){f(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=N(e,t);if(Nt(n.visibleWrites,r))return null;{const o=Q(n.visibleWrites,r);return Rt(o)?i.getChild(t):fe(o,i.getChild(t))}}function Eo(n,e,t,s){const i=N(e,t),r=se(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Q(n.visibleWrites,i);return fe(o,s.getNode().getImmediateChild(t))}else return null}function Io(n,e){return se(n.visibleWrites,e)}function To(n,e,t,s,i,r,o){let l;const a=Q(n.visibleWrites,e),c=se(a,C());if(c!=null)l=c;else if(t!=null)l=fe(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],u=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=d.getNext();for(;_&&h.length<i;)u(_,s)!==0&&h.push(_),_=d.getNext();return h}else return[]}function wo(){return{visibleWrites:q.empty(),allWrites:[],lastWriteId:-1}}function Xe(n,e,t,s){return Gs(n.writeTree,n.treePath,e,t,s)}function Kt(n,e){return vo(n.writeTree,n.treePath,e)}function Gn(n,e,t,s){return Co(n.writeTree,n.treePath,e,t,s)}function Je(n,e){return Io(n.writeTree,N(n.treePath,e))}function So(n,e,t,s,i,r){return To(n.writeTree,n.treePath,e,t,s,i,r)}function jt(n,e,t){return Eo(n.writeTree,n.treePath,e,t)}function Hs(n,e){return Bs(N(n.treePath,e),n.writeTree)}function Bs(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;f(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),f(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,ke(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,be(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,de(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,ke(s,e.snapshotNode,i.oldSnap));else throw De("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Ys=new Ro;class $t{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new te(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jt(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ne(this.viewCache_),r=So(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(n){return{filter:n}}function ko(n,e){f(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function xo(n,e,t,s,i){const r=new No;let o,l;if(t.type===U.OVERWRITE){const c=t;c.source.fromUser?o=bt(n,e,c.path,c.snap,s,i,r):(f(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!v(c.path),o=Ze(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===U.MERGE){const c=t;c.source.fromUser?o=Ao(n,e,c.path,c.children,s,i,r):(f(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=kt(n,e,c.path,c.children,s,i,l,r))}else if(t.type===U.ACK_USER_WRITE){const c=t;c.revert?o=Oo(n,e,c.path,s,i,r):o=Mo(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===U.LISTEN_COMPLETE)o=Do(n,e,t.path,s,r);else throw De("Unknown operation type: "+t.type);const a=r.getChanges();return Po(e,o,a),{viewCache:o,changes:a}}function Po(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=St(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Ls(St(e)))}}function Qs(n,e,t,s,i,r){const o=e.eventCache;if(Je(s,t)!=null)return e;{let l,a;if(v(t))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ne(e),h=c instanceof g?c:g.EMPTY_NODE,u=Kt(s,h);l=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=Xe(s,ne(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=m(t);if(c===".priority"){f(z(t)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const u=Gn(s,t,h,a);u!=null?l=n.filter.updatePriority(h,u):l=o.getNode()}else{const h=T(t);let u;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Gn(s,t,o.getNode(),a);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=jt(s,c,e.serverCache);u!=null?l=n.filter.updateChild(o.getNode(),c,u,h,i,r):l=o.getNode()}}return we(e,l,o.isFullyInitialized()||v(t),n.filter.filtersNodes())}}function Ze(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(v(t))c=h.updateFullNode(a.getNode(),s,null);else if(h.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(t,s);c=h.updateFullNode(a.getNode(),_,null)}else{const _=m(t);if(!a.isCompleteForPath(t)&&z(t)>1)return e;const p=T(t),P=a.getNode().getImmediateChild(_).updateChild(p,s);_===".priority"?c=h.updatePriority(a.getNode(),P):c=h.updateChild(a.getNode(),_,P,p,Ys,null)}const u=Us(e,c,a.isFullyInitialized()||v(t),h.filtersNodes()),d=new $t(i,u,r);return Qs(n,u,t,i,d,l)}function bt(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const h=new $t(i,e,r);if(v(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=we(e,c,!0,n.filter.filtersNodes());else{const u=m(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=we(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=T(t),_=l.getNode().getImmediateChild(u);let p;if(v(d))p=s;else{const E=h.getCompleteChild(u);E!=null?Rs(d)===".priority"&&E.getChild(ks(d)).isEmpty()?p=E:p=E.updateChild(d,s):p=g.EMPTY_NODE}if(_.equals(p))a=e;else{const E=n.filter.updateChild(l.getNode(),u,p,d,h,o);a=we(e,E,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function Hn(n,e){return n.eventCache.isCompleteForChild(e)}function Ao(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const h=N(t,a);Hn(e,m(h))&&(l=bt(n,l,h,c,i,r,o))}),s.foreach((a,c)=>{const h=N(t,a);Hn(e,m(h))||(l=bt(n,l,h,c,i,r,o))}),l}function Bn(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function kt(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;v(t)?c=s:c=new w(null).setTree(t,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const _=e.serverCache.getNode().getImmediateChild(u),p=Bn(n,_,d);a=Ze(n,a,new I(u),p,i,r,o,l)}}),c.children.inorderTraversal((u,d)=>{const _=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!_){const p=e.serverCache.getNode().getImmediateChild(u),E=Bn(n,p,d);a=Ze(n,a,new I(u),E,i,r,o,l)}}),a}function Mo(n,e,t,s,i,r,o){if(Je(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(v(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Ze(n,e,t,a.getNode().getChild(t),i,r,l,o);if(v(t)){let c=new w(null);return a.getNode().forEachChild(ae,(h,u)=>{c=c.set(new I(h),u)}),kt(n,e,t,c,i,r,l,o)}else return e}else{let c=new w(null);return s.foreach((h,u)=>{const d=N(t,h);a.isCompleteForPath(d)&&(c=c.set(h,a.getNode().getChild(d)))}),kt(n,e,t,c,i,r,l,o)}}function Do(n,e,t,s,i){const r=e.serverCache,o=Us(e,r.getNode(),r.isFullyInitialized()||v(t),r.isFiltered());return Qs(n,o,t,s,Ys,i)}function Oo(n,e,t,s,i,r){let o;if(Je(s,t)!=null)return e;{const l=new $t(s,e,i),a=e.eventCache.getNode();let c;if(v(t)||m(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Xe(s,ne(e));else{const u=e.serverCache.getNode();f(u instanceof g,"serverChildren would be complete if leaf node"),h=Kt(s,u)}h=h,c=n.filter.updateFullNode(a,h,r)}else{const h=m(t);let u=jt(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=a.getImmediateChild(h)),u!=null?c=n.filter.updateChild(a,h,u,T(t),l,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(a,h,g.EMPTY_NODE,T(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Xe(s,ne(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Je(s,C())!=null,we(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ht(s.getIndex()),r=eo(s);this.processor_=bo(r);const o=t.serverCache,l=t.eventCache,a=i.updateFullNode(g.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(g.EMPTY_NODE,l.getNode(),null),h=new te(a,o.isFullyInitialized(),i.filtersNodes()),u=new te(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=ot(u,h),this.eventGenerator_=new lo(this.query_)}get query(){return this.query_}}function Fo(n){return n.viewCache_.serverCache.getNode()}function Wo(n,e){const t=ne(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!v(e)&&!t.getImmediateChild(m(e)).isEmpty())?t.getChild(e):null}function Yn(n){return n.eventRegistrations_.length===0}function Uo(n,e){n.eventRegistrations_.push(e)}function Qn(n,e,t){const s=[];if(t){f(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function zn(n,e,t,s){e.type===U.MERGE&&e.source.queryId!==null&&(f(ne(n.viewCache_),"We should always have a full cache before handling merges"),f(St(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=xo(n.processor_,i,e,t,s);return ko(n.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,zs(n,r.changes,r.viewCache.eventCache.getNode(),null)}function qo(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(S,(r,o)=>{s.push(de(r,o))}),t.isFullyInitialized()&&s.push(Ls(t.getNode())),zs(n,s,t.getNode(),e)}function zs(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return ao(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et;class Vo{constructor(){this.views=new Map}}function Go(n){f(!et,"__referenceConstructor has already been defined"),et=n}function Ho(){return f(et,"Reference.ts has not been loaded"),et}function Bo(n){return n.views.size===0}function Xt(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return f(r!=null,"SyncTree gave us an op for an invalid query."),zn(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(zn(o,e,t,s));return r}}function Yo(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=Xe(t,i?s:null),a=!1;l?a=!0:s instanceof g?(l=Kt(t,s),a=!1):(l=g.EMPTY_NODE,a=!1);const c=ot(new te(l,a,!1),new te(s,i,!1));return new Lo(e,c)}return o}function Qo(n,e,t,s,i,r){const o=Yo(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Uo(o,t),qo(o,t)}function zo(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const l=K(n);if(i==="default")for(const[a,c]of n.views.entries())o=o.concat(Qn(c,t,s)),Yn(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(i);a&&(o=o.concat(Qn(a,t,s)),Yn(a)&&(n.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!K(n)&&r.push(new(Ho())(e._repo,e._path)),{removed:r,events:o}}function Ks(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ce(n,e){let t=null;for(const s of n.views.values())t=t||Wo(s,e);return t}function js(n,e){if(e._queryParams.loadsAllData())return lt(n);{const s=e._queryIdentifier;return n.views.get(s)}}function $s(n,e){return js(n,e)!=null}function K(n){return lt(n)!=null}function lt(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tt;function Ko(n){f(!tt,"__referenceConstructor has already been defined"),tt=n}function jo(){return f(tt,"Reference.ts has not been loaded"),tt}let $o=1;class Kn{constructor(e){this.listenProvider_=e,this.syncPointTree_=new w(null),this.pendingWriteTree_=wo(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Xs(n,e,t,s,i){return fo(n.pendingWriteTree_,e,t,s,i),i?We(n,new ee(Ws(),e,t)):[]}function J(n,e,t=!1){const s=_o(n.pendingWriteTree_,e);if(po(n.pendingWriteTree_,e)){let r=new w(null);return s.snap!=null?r=r.set(C(),!0):L(s.children,o=>{r=r.set(new I(o),!0)}),We(n,new $e(s.path,r,t))}else return[]}function at(n,e,t){return We(n,new ee(Yt(),e,t))}function Xo(n,e,t){const s=w.fromObject(t);return We(n,new Ae(Yt(),e,s))}function Jo(n,e){return We(n,new Pe(Yt(),e))}function Zo(n,e,t){const s=Zt(n,t);if(s){const i=en(s),r=i.path,o=i.queryId,l=M(r,e),a=new Pe(Qt(o),l);return tn(n,r,a)}else return[]}function xt(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||$s(o,e))){const a=zo(o,e,t,s);Bo(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(d,_)=>K(_));if(h&&!u){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=nl(d);for(let p=0;p<_.length;++p){const E=_[p],P=E.query,ie=ei(n,E);n.listenProvider_.startListening(Ne(P),nt(n,P),ie.hashFn,ie.onComplete)}}}!u&&c.length>0&&!s&&(h?n.listenProvider_.stopListening(Ne(e),null):c.forEach(d=>{const _=n.queryToTagMap.get(ct(d));n.listenProvider_.stopListening(Ne(d),_)}))}sl(n,c)}return l}function el(n,e,t,s){const i=Zt(n,s);if(i!=null){const r=en(i),o=r.path,l=r.queryId,a=M(o,e),c=new ee(Qt(l),a,t);return tn(n,o,c)}else return[]}function tl(n,e,t,s){const i=Zt(n,s);if(i){const r=en(i),o=r.path,l=r.queryId,a=M(o,e),c=w.fromObject(t),h=new Ae(Qt(l),a,c);return tn(n,o,h)}else return[]}function jn(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,_)=>{const p=M(d,i);r=r||ce(_,p),o=o||K(_)});let l=n.syncPointTree_.get(i);l?(o=o||K(l),r=r||ce(l,C())):(l=new Vo,n.syncPointTree_=n.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=g.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((_,p)=>{const E=ce(p,C());E&&(r=r.updateImmediateChild(_,E))}));const c=$s(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=ct(e);f(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=il();n.queryToTagMap.set(d,_),n.tagToQueryMap.set(_,d)}const h=zt(n.pendingWriteTree_,i);let u=Qo(l,e,t,h,r,a);if(!c&&!o&&!s){const d=js(l,e);u=u.concat(rl(n,e,d))}return u}function Jt(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=M(o,e),c=ce(l,a);if(c)return c});return Gs(i,e,r,t,!0)}function We(n,e){return Js(e,n.syncPointTree_,null,zt(n.pendingWriteTree_,C()))}function Js(n,e,t,s){if(v(n.path))return Zs(n,e,t,s);{const i=e.get(C());t==null&&i!=null&&(t=ce(i,C()));let r=[];const o=m(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,h=Hs(s,o);r=r.concat(Js(l,a,c,h))}return i&&(r=r.concat(Xt(i,n,s,t))),r}}function Zs(n,e,t,s){const i=e.get(C());t==null&&i!=null&&(t=ce(i,C()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=Hs(s,o),h=n.operationForChild(o);h&&(r=r.concat(Zs(h,l,a,c)))}),i&&(r=r.concat(Xt(i,n,s,t))),r}function ei(n,e){const t=e.query,s=nt(n,t);return{hashFn:()=>(Fo(e)||g.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Zo(n,t._path,s):Jo(n,t._path);{const r=Zi(i,t);return xt(n,t,null,r)}}}}function nt(n,e){const t=ct(e);return n.queryToTagMap.get(t)}function ct(n){return n._path.toString()+"$"+n._queryIdentifier}function Zt(n,e){return n.tagToQueryMap.get(e)}function en(n){const e=n.indexOf("$");return f(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new I(n.substr(0,e))}}function tn(n,e,t){const s=n.syncPointTree_.get(e);f(s,"Missing sync point for query tag that we're tracking");const i=zt(n.pendingWriteTree_,e);return Xt(s,t,i,null)}function nl(n){return n.fold((e,t,s)=>{if(t&&K(t))return[lt(t)];{let i=[];return t&&(i=Ks(t)),L(s,(r,o)=>{i=i.concat(o)}),i}})}function Ne(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(jo())(n._repo,n._path):n}function sl(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=ct(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function il(){return $o++}function rl(n,e,t){const s=e._path,i=nt(n,e),r=ei(n,t),o=n.listenProvider_.startListening(Ne(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)f(!K(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,h,u)=>{if(!v(c)&&h&&K(h))return[lt(h).query];{let d=[];return h&&(d=d.concat(Ks(h).map(_=>_.query))),L(u,(_,p)=>{d=d.concat(p)}),d}});for(let c=0;c<a.length;++c){const h=a[c];n.listenProvider_.stopListening(Ne(h),nt(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new nn(t)}node(){return this.node_}}class sn{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=N(this.path_,e);return new sn(this.syncTree_,t)}node(){return Jt(this.syncTree_,this.path_)}}const ol=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},$n=function(n,e,t){if(!n||typeof n!="object")return n;if(f(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return ll(n[".sv"],e,t);if(typeof n[".sv"]=="object")return al(n[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},ll=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:f(!1,"Unexpected server value: "+n)}},al=function(n,e,t){n.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&f(!1,"Unexpected increment value: "+s);const i=e.node();if(f(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},cl=function(n,e,t,s){return rn(e,new sn(t,n),s)},ti=function(n,e,t){return rn(n,new nn(e),t)};function rn(n,e,t){const s=n.getPriority().val(),i=$n(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=$n(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new R(l,x(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new R(i))),o.forEachChild(S,(l,a)=>{const c=rn(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function ln(n,e){let t=e instanceof I?e:new I(e),s=n,i=m(t);for(;i!==null;){const r=he(s.node.children,i)||{children:{},childCount:0};s=new on(i,s,r),t=T(t),i=m(t)}return s}function me(n){return n.node.value}function ni(n,e){n.node.value=e,Pt(n)}function si(n){return n.node.childCount>0}function hl(n){return me(n)===void 0&&!si(n)}function ht(n,e){L(n.node.children,(t,s)=>{e(new on(t,n,s))})}function ii(n,e,t,s){t&&e(n),ht(n,i=>{ii(i,e,!0)})}function ul(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ue(n){return new I(n.parent===null?n.name:Ue(n.parent)+"/"+n.name)}function Pt(n){n.parent!==null&&dl(n.parent,n.name,n)}function dl(n,e,t){const s=hl(t),i=Y(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Pt(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Pt(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=/[\[\].#$\/\u0000-\u001F\u007F]/,_l=/[\[\].#$\u0000-\u001F\u007F]/,vt=10*1024*1024,ri=function(n){return typeof n=="string"&&n.length!==0&&!fl.test(n)},oi=function(n){return typeof n=="string"&&n.length!==0&&!_l.test(n)},pl=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),oi(n)},li=function(n,e,t,s){s&&e===void 0||an(Mt(n,"value"),e,t)},an=function(n,e,t){const s=t instanceof I?new Ar(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+$(s));if(typeof e=="function")throw new Error(n+"contains a function "+$(s)+" with contents = "+e.toString());if(os(e))throw new Error(n+"contains "+e.toString()+" "+$(s));if(typeof e=="string"&&e.length>vt/3&&it(e)>vt)throw new Error(n+"contains a string greater than "+vt+" utf8 bytes "+$(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(L(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ri(o)))throw new Error(n+" contains an invalid key ("+o+") "+$(s)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Mr(s,o),an(n,l,s),Dr(s)}),i&&r)throw new Error(n+' contains ".value" child '+$(s)+" in addition to actual children.")}},ai=function(n,e,t,s){if(!oi(t))throw new Error(Mt(n,e)+'was an invalid path = "'+t+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},gl=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ai(n,e,t)},cn=function(n,e){if(m(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},ml=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ri(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!pl(t))throw new Error(Mt(n,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function hn(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!qt(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function ci(n,e,t){hn(n,t),hi(n,s=>qt(s,e))}function B(n,e,t){hn(n,t),hi(n,s=>W(s,e)||W(e,s))}function hi(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(vl(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function vl(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ie&&A("event: "+t.toString()),ge(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="repo_interrupt",El=25;class Il{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new yl,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=je(),this.transactionQueueTree_=new on,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Tl(n,e,t){if(n.stats_=Wt(n.repoInfo_),n.forceRestClient_||sr())n.server_=new Ke(n.repoInfo_,(s,i,r,o)=>{Xn(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Jn(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{k(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new G(n.repoInfo_,e,(s,i,r,o)=>{Xn(n,s,i,r,o)},s=>{Jn(n,s)},s=>{wl(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=ar(n.repoInfo_,()=>new oo(n.stats_,n.server_)),n.infoData_=new to,n.infoSyncTree_=new Kn({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=at(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),dn(n,"connected",!1),n.serverSyncTree_=new Kn({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);B(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function ui(n){const t=n.infoData_.getNode(new I(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function un(n){return ol({timestamp:ui(n)})}function Xn(n,e,t,s,i){n.dataUpdateCount++;const r=new I(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=Be(t,c=>x(c));o=tl(n.serverSyncTree_,r,a,i)}else{const a=x(t);o=el(n.serverSyncTree_,r,a,i)}else if(s){const a=Be(t,c=>x(c));o=Xo(n.serverSyncTree_,r,a)}else{const a=x(t);o=at(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=ut(n,r)),B(n.eventQueue_,l,o)}function Jn(n,e){dn(n,"connected",e),e===!1&&Nl(n)}function wl(n,e){L(e,(t,s)=>{dn(n,t,s)})}function dn(n,e,t){const s=new I("/.info/"+e),i=x(t);n.infoData_.updateSnapshot(s,i);const r=at(n.infoSyncTree_,s,i);B(n.eventQueue_,s,r)}function di(n){return n.nextWriteId_++}function Sl(n,e,t,s,i){fn(n,"set",{path:e.toString(),value:t,priority:s});const r=un(n),o=x(t,s),l=Jt(n.serverSyncTree_,e),a=ti(o,l,r),c=di(n),h=Xs(n.serverSyncTree_,e,a,c,!0);hn(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(d,_)=>{const p=d==="ok";p||O("set at "+e+" failed: "+d);const E=J(n.serverSyncTree_,c,!p);B(n.eventQueue_,e,E),xl(n,i,d,_)});const u=mi(n,e);ut(n,u),B(n.eventQueue_,u,[])}function Nl(n){fn(n,"onDisconnectEvents");const e=un(n),t=je();wt(n.onDisconnect_,C(),(i,r)=>{const o=cl(i,r,n.serverSyncTree_,e);Fs(t,i,o)});let s=[];wt(t,C(),(i,r)=>{s=s.concat(at(n.serverSyncTree_,i,r));const o=mi(n,i);ut(n,o)}),n.onDisconnect_=je(),B(n.eventQueue_,C(),s)}function Rl(n,e,t){let s;m(e._path)===".info"?s=jn(n.infoSyncTree_,e,t):s=jn(n.serverSyncTree_,e,t),ci(n.eventQueue_,e._path,s)}function bl(n,e,t){let s;m(e._path)===".info"?s=xt(n.infoSyncTree_,e,t):s=xt(n.serverSyncTree_,e,t),ci(n.eventQueue_,e._path,s)}function kl(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Cl)}function fn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),A(t,...e)}function xl(n,e,t,s){e&&ge(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function fi(n,e,t){return Jt(n.serverSyncTree_,e,t)||g.EMPTY_NODE}function _n(n,e=n.transactionQueueTree_){if(e||dt(n,e),me(e)){const t=pi(n,e);f(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Pl(n,Ue(e),t)}else si(e)&&ht(e,t=>{_n(n,t)})}function Pl(n,e,t){const s=t.map(c=>c.currentWriteId),i=fi(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const h=t[c];f(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=M(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{fn(n,"transaction put response",{path:a.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(J(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();dt(n,ln(n.transactionQueueTree_,e)),_n(n,n.transactionQueueTree_),B(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)ge(u[d])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{O("transaction at "+a.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}ut(n,e)}},o)}function ut(n,e){const t=_i(n,e),s=Ue(t),i=pi(n,t);return Al(n,i,s),s}function Al(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=M(t,a.path);let h=!1,u;if(f(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,u=a.abortReason,i=i.concat(J(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=El)h=!0,u="maxretry",i=i.concat(J(n.serverSyncTree_,a.currentWriteId,!0));else{const d=fi(n,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){an("transaction failed: Data returned ",_,a.path);let p=x(_);typeof _=="object"&&_!=null&&Y(_,".priority")||(p=p.updatePriority(d.getPriority()));const P=a.currentWriteId,ie=un(n),qe=ti(p,d,ie);a.currentOutputSnapshotRaw=p,a.currentOutputSnapshotResolved=qe,a.currentWriteId=di(n),o.splice(o.indexOf(P),1),i=i.concat(Xs(n.serverSyncTree_,a.path,qe,a.currentWriteId,a.applyLocally)),i=i.concat(J(n.serverSyncTree_,P,!0))}else h=!0,u="nodata",i=i.concat(J(n.serverSyncTree_,a.currentWriteId,!0))}B(n.eventQueue_,t,i),i=[],h&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(u),!1,null))))}dt(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)ge(s[l]);_n(n,n.transactionQueueTree_)}function _i(n,e){let t,s=n.transactionQueueTree_;for(t=m(e);t!==null&&me(s)===void 0;)s=ln(s,t),e=T(e),t=m(e);return s}function pi(n,e){const t=[];return gi(n,e,t),t.sort((s,i)=>s.order-i.order),t}function gi(n,e,t){const s=me(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);ht(e,i=>{gi(n,i,t)})}function dt(n,e){const t=me(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,ni(e,t.length>0?t:void 0)}ht(e,s=>{dt(n,s)})}function mi(n,e){const t=Ue(_i(n,e)),s=ln(n.transactionQueueTree_,e);return ul(s,i=>{Ct(n,i)}),Ct(n,s),ii(s,i=>{Ct(n,i)}),t}function Ct(n,e){const t=me(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(f(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(J(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ni(e,void 0):t.length=r+1,B(n.eventQueue_,Ue(e),i);for(let o=0;o<s.length;o++)ge(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(r){}e+="/"+i}return e}function Dl(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):O("Invalid query segment '".concat(t,"' in query '").concat(n,"'"))}return e}const Zn=function(n,e){const t=Ol(n),s=t.namespace;t.domain==="firebase.com"&&H(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&H("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Ki();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new ys(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new I(t.pathString)}},Ol=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(i=Ml(n.substring(h,u)));const d=Dl(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ll=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=es.charAt(t%64),t=Math.floor(t/64);f(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=es.charAt(e[i]);return f(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+k(this.snapshot.exportVal())}}class Wl{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return f(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return v(this._path)?null:Rs(this._path)}get ref(){return new j(this._repo,this._path)}get _queryIdentifier(){const e=Fn(this._queryParams),t=Lt(e);return t==="{}"?"default":t}get _queryObject(){return Fn(this._queryParams)}isEqual(e){if(e=_e(e),!(e instanceof pn))return!1;const t=this._repo===e._repo,s=qt(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Pr(this._path)}}class j extends pn{constructor(e,t){super(e,t,new Bt,!1)}get parent(){const e=ks(this._path);return e===null?null:new j(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class st{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new I(e),s=Me(this.ref,e);return new st(this._node.getChild(t),s,S)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new st(i,Me(this.ref,s),S)))}hasChild(e){const t=new I(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Xl(n,e){return n=_e(n),n._checkNotDeleted("ref"),e!==void 0?Me(n._root,e):n._root}function Me(n,e){return n=_e(n),m(n._path)===null?gl("child","path",e):ai("child","path",e),new j(n._repo,N(n._path,e))}function Jl(n,e){n=_e(n),cn("push",n._path),li("push",e,n._path,!0);const t=ui(n._repo),s=Ll(t),i=Me(n,s),r=Me(n,s);let o;return e!=null?o=yi(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Zl(n){return cn("remove",n._path),yi(n,null)}function yi(n,e){n=_e(n),cn("set",n._path),li("set",e,n._path,!1);const t=new Ot;return Sl(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class gn{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Fl("value",this,new st(e.snapshotNode,new j(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Wl(this,e,t):null}matches(e){return e instanceof gn?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function ql(n,e,t,s,i){const r=new Ul(t,void 0),o=new gn(r);return Rl(n._repo,n,o),()=>bl(n._repo,n,o)}function ea(n,e,t,s){return ql(n,"value",e)}Go(j);Ko(j);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl="FIREBASE_DATABASE_EMULATOR_HOST",At={};let Gl=!1;function Hl(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=ts(r);n.repoInfo_=new ys(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function Bl(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||H("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),A("Using default host for project ",n.options.projectId),r="".concat(n.options.projectId,"-default-rtdb.firebaseio.com"));let o=Zn(r,i),l=o.repoInfo,a;typeof process<"u"&&vn&&(a=vn[Vl]),a?(r="http://".concat(a,"?ns=").concat(l.namespace),o=Zn(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new rr(n.name,n.options,e);ml("Invalid Firebase Database URL",o),v(o.path)||H("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Ql(l,n,c,new ir(n,t));return new zl(h,n)}function Yl(n,e){const t=At[e];(!t||t[n.key]!==n)&&H("Database ".concat(e,"(").concat(n.repoInfo_,") has already been deleted.")),kl(n),delete t[n.key]}function Ql(n,e,t,s){let i=At[e.name];i||(i={},At[e.name]=i);let r=i[n.toURLString()];return r&&H("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Il(n,Gl,t,s),i[n.toURLString()]=r,r}class zl{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Tl(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new j(this._repo,C())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Yl(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&H("Cannot call "+e+" on a deleted database.")}}function ta(n=Ci(),e){const t=Ei(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Ii("database");s&&Kl(t,...s)}return t}function Kl(n,e,t,s={}){n=_e(n),n._checkNotDeleted("useEmulator");const i="".concat(e,":").concat(t),r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&Ti(s,r.repoInfo_.emulatorOptions))return;H("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&H('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new He(He.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:wi(s.mockUserToken,n.app.options.projectId);o=new He(l)}ts(e)&&Si(e),Hl(r,i,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(n){Gi(Vi),xi(new Pi("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Bl(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),mn(Cn,En,n),mn(Cn,En,"esm2017")}G.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};G.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};jl();export{Zl as a,ta as g,ea as o,Jl as p,Xl as r};
