"use strict";(self.webpackChunkstrapi_demo=self.webpackChunkstrapi_demo||[]).push([[6266],{46266:(W,s,_)=>{_.r(s),_.d(s,{UserListPageEE:()=>m});var a=_(92132),o=_(54019),n=_(17209),A=_(21272),R=_(55506),C=_(5409),i=_(18920),U=_(15126),v=_(63299),B=_(67014),t=_(59080),l=_(79275),L=_(14718),d=_(82437),I=_(61535),O=_(5790),T=_(12083),M=_(35223),E=_(74930),D=_(2600),K=_(48940),P=_(41286),h=_(56336),r=_(13426),f=_(84624),g=_(77965),S=_(54257),y=_(71210),j=_(51187),N=_(39404),V=_(58692),F=_(501),x=_(57646),G=_(23120),$=_(44414),z=_(25962),H=_(14664),X=_(42588),Y=_(90325),J=_(62785),Z=_(87443),c=_(41032),Q=_(22957),e=_(93179),u=_(73055),p=_(15747),k=_(85306),w=_(26509),b=_(32058),q=_(81185),__=_(82261),E_=_(62482),t_=_(2520),s_=_(31916),O_=_(37754),M_=_(55151),D_=_(79077),P_=_(67031);const m=()=>((0,n.u)(),(0,a.jsx)(o.e,{}))},17209:(W,s,_)=>{_.d(s,{u:()=>B});var a=_(21272),o=_(55506),n=_(67031),A=_(54894),R=_(17703),C=_(18920);const i="strapi-notification-seat-limit",U="https://cloud.strapi.io/profile/billing",v="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,A.A)(),{license:l,isError:L,isLoading:d}=(0,C.m)(),I=(0,o.hN)(),{pathname:O}=(0,R.zy)(),{enforcementUserCount:T,permittedSeats:M,licenseLimitStatus:E,isHostedOnStrapiCloud:D}=l??{};a.useEffect(()=>{if(L||d)return;const K=!n(M)&&!window.sessionStorage.getItem(`${i}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let P;E==="OVER_LIMIT"?P="warning":E==="AT_LIMIT"&&(P="softWarning"),K&&I({type:P,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:M}),link:{url:D?U:v,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:D})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${O}`,"true")}})},[I,l,O,t,d,M,E,T,D,L])}}}]);
