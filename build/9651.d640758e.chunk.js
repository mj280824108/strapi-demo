"use strict";(self.webpackChunkstrapi_demo=self.webpackChunkstrapi_demo||[]).push([[9651],{99651:(ps,D,e)=>{e.r(D),e.d(D,{default:()=>ss});var s=e(92132),x=e(21272),b=e(61485),N=e(99248),Y=e(6239),$=e(90151),M=e(68074),Q=e(5287),H=e(67030),T=e(85963),z=e(35513),G=e(26127),c=e(90361),m=e(33363),f=e(98765),P=e(30893),V=e(25641),y=e(58805),v=e(88353),X=e(11273),A=e(38413),C=e(55356),L=e(4198),a=e(55506),j=e(54894),O=e(74930),i=e(60828),gs=e(77965),J=e(37679),U=e(60043),Z=e(61535),l=e(33544),E=e(12083),k=e(70603),R=e(41909),q=e(54514);const w=E.Ik().shape({options:E.Ik().shape({from:E.Ik().shape({name:E.Yj().required(a.iW.required),email:E.Yj().email(a.iW.email).required(a.iW.required)}).required(),response_email:E.Yj().email(a.iW.email),object:E.Yj().required(a.iW.required),message:E.Yj().required(a.iW.required)}).required(a.iW.required)}),W=({template:t,onToggle:r,onSubmit:n})=>{const{formatMessage:d}=(0,j.A)();return(0,s.jsxs)(b.k,{onClose:r,labelledBy:`${d({id:(0,i.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${d({id:(0,i.g)(t.display),defaultMessage:t.display})}`,children:[(0,s.jsx)(N.r,{children:(0,s.jsxs)(J.B,{label:`${d({id:(0,i.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${d({id:(0,i.g)(t.display),defaultMessage:t.display})}`,children:[(0,s.jsx)(U.m,{children:d({id:(0,i.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}),(0,s.jsx)(U.m,{isCurrent:!0,children:d({id:(0,i.g)(t.display),defaultMessage:t.display})})]})}),(0,s.jsx)(Z.l1,{onSubmit:n,initialValues:t,validateOnChange:!1,validationSchema:w,enableReinitialize:!0,children:({errors:_,values:p,handleChange:g,isSubmitting:h})=>(0,s.jsxs)(a.lV,{children:[(0,s.jsx)(Y.c,{children:(0,s.jsxs)($.x,{gap:5,children:[(0,s.jsx)(M.E,{col:6,s:12,children:(0,s.jsx)(a.ah,{intlLabel:{id:(0,i.g)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:g,value:p.options.from.name,error:_?.options?.from?.name,type:"text"})}),(0,s.jsx)(M.E,{col:6,s:12,children:(0,s.jsx)(a.ah,{intlLabel:{id:(0,i.g)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:g,value:p.options.from.email,error:_?.options?.from?.email,type:"text"})}),(0,s.jsx)(M.E,{col:6,s:12,children:(0,s.jsx)(a.ah,{intlLabel:{id:(0,i.g)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:g,value:p.options.response_email,error:_?.options?.response_email,type:"text"})}),(0,s.jsx)(M.E,{col:6,s:12,children:(0,s.jsx)(a.ah,{intlLabel:{id:(0,i.g)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:g,value:p.options.object,error:_?.options?.object,type:"text"})}),(0,s.jsx)(M.E,{col:12,s:12,children:(0,s.jsx)(Q.T,{label:d({id:(0,i.g)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:g,value:p.options.message,error:_?.options?.message&&d({id:_.options.message,defaultMessage:_.options.message})})})]})}),(0,s.jsx)(H.j,{startActions:(0,s.jsx)(T.$,{onClick:r,variant:"tertiary",children:"Cancel"}),endActions:(0,s.jsx)(T.$,{loading:h,type:"submit",children:"Finish"})})]})})]})};W.propTypes={template:l.shape({display:l.string,icon:l.string,options:l.shape({from:l.shape({name:l.string,email:l.string}),message:l.string,object:l.string,response_email:l.string})}).isRequired,onSubmit:l.func.isRequired,onToggle:l.func.isRequired};const I=({canUpdate:t,onEditClick:r})=>{const{formatMessage:n}=(0,j.A)();return(0,s.jsxs)(z.X,{colCount:3,rowCount:3,children:[(0,s.jsx)(G.d,{children:(0,s.jsxs)(c.Tr,{children:[(0,s.jsx)(m.Th,{width:"1%",children:(0,s.jsx)(f.s,{children:n({id:(0,i.g)("Email.template.table.icon.label"),defaultMessage:"icon"})})}),(0,s.jsx)(m.Th,{children:(0,s.jsx)(P.o,{variant:"sigma",textColor:"neutral600",children:n({id:(0,i.g)("Email.template.table.name.label"),defaultMessage:"name"})})}),(0,s.jsx)(m.Th,{width:"1%",children:(0,s.jsx)(f.s,{children:n({id:(0,i.g)("Email.template.table.action.label"),defaultMessage:"action"})})})]})}),(0,s.jsxs)(V.N,{children:[(0,s.jsxs)(c.Tr,{...(0,a.qM)({fn:()=>r("reset_password")}),children:[(0,s.jsx)(m.Td,{children:(0,s.jsx)(y.I,{children:(0,s.jsx)(k.A,{"aria-label":n({id:"global.reset-password",defaultMessage:"Reset password"})})})}),(0,s.jsx)(m.Td,{children:(0,s.jsx)(P.o,{children:n({id:"global.reset-password",defaultMessage:"Reset password"})})}),(0,s.jsx)(m.Td,{...a.dG,children:(0,s.jsx)(v.K,{onClick:()=>r("reset_password"),label:n({id:(0,i.g)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:t&&(0,s.jsx)(R.A,{})})})]}),(0,s.jsxs)(c.Tr,{...(0,a.qM)({fn:()=>r("email_confirmation")}),children:[(0,s.jsx)(m.Td,{children:(0,s.jsx)(y.I,{children:(0,s.jsx)(q.A,{"aria-label":n({id:(0,i.g)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})})}),(0,s.jsx)(m.Td,{children:(0,s.jsx)(P.o,{children:n({id:(0,i.g)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})}),(0,s.jsx)(m.Td,{...a.dG,children:(0,s.jsx)(v.K,{onClick:()=>r("email_confirmation"),label:n({id:(0,i.g)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:t&&(0,s.jsx)(R.A,{})})})]})]})]})};I.propTypes={canUpdate:l.bool.isRequired,onEditClick:l.func.isRequired};const ss=()=>(0,s.jsx)(a.kz,{permissions:i.P.readEmailTemplates,children:(0,s.jsx)(es,{})}),es=()=>{const{formatMessage:t}=(0,j.A)(),{trackUsage:r}=(0,a.z1)(),{notifyStatus:n}=(0,X.W)(),d=(0,a.hN)(),{lockApp:_,unlockApp:p}=(0,a.MA)(),g=(0,O.useQueryClient)(),{get:h,put:as}=(0,a.ry)(),{formatAPIError:B}=(0,a.wq)();(0,a.L4)();const[is,ts]=x.useState(!1),[K,ls]=x.useState(null),{isLoading:ns,allowedActions:{canUpdate:os}}=(0,a.ec)({update:i.P.updateEmailTemplates}),{isLoading:ds,data:S}=(0,O.useQuery)(["users-permissions","email-templates"],async()=>{const{data:o}=await h("/users-permissions/email-templates");return o},{onSuccess(){n(t({id:(0,i.g)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(o){d({type:"warning",message:B(o)})}}),rs=ns||ds,u=()=>{ts(o=>!o)},ms=o=>{ls(o),u()},F=(0,O.useMutation)(o=>as("/users-permissions/email-templates",{"email-templates":o}),{async onSuccess(){await g.invalidateQueries(["users-permissions","email-templates"]),d({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),r("didEditEmailTemplates"),p(),u()},onError(o){d({type:"warning",message:B(o)}),p()},refetchActive:!0}),_s=o=>{_(),r("willEditEmailTemplates");const Es={...S,[K]:o};F.mutate(Es)};return rs?(0,s.jsxs)(A.g,{"aria-busy":"true",children:[(0,s.jsx)(a.x7,{name:t({id:(0,i.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsx)(C.Q,{title:t({id:(0,i.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsx)(L.s,{children:(0,s.jsx)(a.Bl,{})})]}):(0,s.jsxs)(A.g,{"aria-busy":F.isLoading,children:[(0,s.jsx)(a.x7,{name:t({id:(0,i.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsx)(C.Q,{title:t({id:(0,i.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsxs)(L.s,{children:[(0,s.jsx)(I,{onEditClick:ms,canUpdate:os}),is&&(0,s.jsx)(W,{template:S[K],onToggle:u,onSubmit:_s})]})]})}}}]);
