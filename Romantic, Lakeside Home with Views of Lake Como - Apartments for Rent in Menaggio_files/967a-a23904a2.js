(window.webpackJsonp=window.webpackJsonp||[]).push([["967a"],{"+N5r":function(e,t,i){"use strict";i.d(t,"a",function(){return r}),i.d(t,"b",function(){return u});var n,r,s,a=i("I9Za"),o=i.n(a),l=i("TpOi"),c=i("DSE6"),d=i("i2/T");(s=r=r||{}).OVERVIEW_TOP="overview_top",s.TITLE_TOP="title_top";var u=Object(c.b)({experimentName:"desktop_bingo_listing_cards",trebuchetName:"desktop_bingo_listing_cards",treatmentSnippets:(n={},babelHelpers.defineProperty(n,d.a,function(){return null}),babelHelpers.defineProperty(n,d.d,function(){return null}),babelHelpers.defineProperty(n,"overview_top",function(){return r.OVERVIEW_TOP}),babelHelpers.defineProperty(n,"title_top",function(){return r.TITLE_TOP}),n),forceInTrebuchetName:"desktop_bingo_listing_cards_force_in",forceInTreatmentName:"overview_top",forceUrlParamName:"erf_force_bingo_cards",experimentEnabled:function(e){var t=e.breakpoints;return"zh"!==o.a.language()&&t[l.b]}})},"/MBQ":function(e,t,i){"use strict";var n=i("fArA"),r=i("q1tI"),I=i.n(r),x=i("ZQ3G"),C=i("kjyK"),s=i("X3aX"),O=i.n(s),R=i("yhop"),k=i("I32s"),a=i("d+R9"),o=i("yn6H"),j=i("5kt2"),T=i("LcWo"),D=(i("DSE6"),i("htP+"),i("t7bN")),B=i("GJnk"),H=i("38wa"),l={expanded:!1,fetchSimilarListingsError:!1,bingoLayout:null,onCardRowSliderImpression:null,onCardRowSliderScroll:null,onExpandPress:null,onListingInfoPress:null,onListingPhotoPress:null,onListingWishlistButtonPress:null,setExpandedListingsCardGridRef:function(){},shouldRenderFetching:!1,showDecimalStarRating:!1,showMoreCards:!1,similarListings:null,similarListingsMetadata:null,shouldClientRoute:!1,template:H.c,isRingo:!1};function c(e){var t=e.css,i=e.expanded,n=e.fetchSimilarListingsError,r=e.bingoLayout,s=e.onCardRowSliderImpression,a=e.onCardRowSliderScroll,o=e.onExpandPress,l=e.onListingInfoPress,c=e.onListingPhotoPress,d=e.onListingWishlistButtonPress,u=e.setExpandedListingsCardGridRef,p=e.shouldClientRoute,h=e.shouldRenderFetching,g=e.showDecimalStarRating,m=e.showMoreCards,f=e.similarListings,b=e.similarListingsMetadata,_=e.styles,v=e.template,L=e.tripDetails,w=e.wishLists,y=e.isRingo;if(h)return I.a.createElement("div",t(_.loader),I.a.createElement(C.a,null));var S=f&&0<f.length;if(n||!h&&!S)return null;var E=(b||{}).title,P=f[0].is_alternative_date;switch(v){case H.c:return I.a.createElement(x.a,null,I.a.createElement(k.a,{top:y?0:2,bottom:y?4:3},y&&I.a.createElement(k.a,{bottom:2},I.a.createElement(R.e,{size:R.b.LARGE,weight:R.d.BOLDER},I.a.createElement(O.a,{k:"homes.pdp.pwa_pdp_ia.similar_listings_title"}))),!y&&I.a.createElement(k.a,{bottom:3},I.a.createElement(R.e,{size:R.b.TITLE3,weight:R.d.BOLDEST},P?I.a.createElement(O.a,{k:"homes.pdp.alternative_dates_similar_listings.section_name"}):I.a.createElement(T.a,{marioName:"mario_copy_monorail_p3_similar_listing_section_name",marioParameter:"similar listing section name"}))),I.a.createElement(D.a,{bingoLayout:r,onCardRowSliderImpression:s,onCardRowSliderScroll:a,onListingInfoPress:l,onListingPhotoPress:c,onListingWishlistButtonPress:d,shouldClientRoute:p,showDecimalStarRating:g,shouldRenderFetching:h,showMoreCards:m,similarListings:f,tripDetails:L,wishLists:w})));case H.a:return I.a.createElement(x.a,null,I.a.createElement(k.a,{top:9,bottom:9},I.a.createElement(k.a,{bottom:4},I.a.createElement(R.e,{size:R.b.TITLE3,weight:R.d.BOLDEST},!P&&I.a.createElement(T.a,{marioName:"mario_copy_monorail_p3_similar_listing_section_name",marioParameter:"similar listing section name"}),P&&I.a.createElement(O.a,{k:"homes.pdp.alternative_dates_similar_listings.section_name"}))),I.a.createElement(D.a,{onCardRowSliderImpression:s,onCardRowSliderScroll:a,onListingInfoPress:l,onListingPhotoPress:c,onListingWishlistButtonPress:d,shouldClientRoute:p,shouldRenderFetching:h,showMoreCards:m,similarListings:f,tripDetails:L,wishLists:w})));case H.d:return I.a.createElement(x.a,null,I.a.createElement(k.a,{bottom:4,bottomMediumAndAbove:6},I.a.createElement(j.a,null,E||I.a.createElement(O.a,{k:"similar_listings.title"}))),I.a.createElement(B.a,{bingoLayout:r,expanded:i,fetchSimilarListingsError:n,onExpandPress:o,onListingInfoPress:l,onListingPhotoPress:c,onListingWishlistButtonPress:d,setExpandedListingsCardGridRef:u,shouldRenderFetching:h,showDecimalStarRating:g,similarListings:f,similarListingsMetadata:b,wishLists:w}));default:return null}}c.defaultProps=l,t.a=Object(n.compose)(o.d,Object(a.c)(function(){return{loader:{paddingBottom:"33%",position:"relative",width:"100%"}}}))(c)},"5kt2":function(e,t,i){"use strict";var n=i("q1tI"),s=i.n(n),r=i("d+R9"),a=i("tPwf"),o=i("qyon");function l(e){var t=e.css,i=e.children,n=e.preventWordBreak,r=e.styles;return s.a.createElement(o.a,null,s.a.createElement(a.f,{weight:a.e.LIGHT},s.a.createElement("span",babelHelpers.extends({"data-veloute":"verified-select-pdp-section-header"},t(r.font,n&&r.font_preventWordBreak)),i)))}l.defaultProps={preventWordBreak:!1},t.a=Object(r.c)(function(e){var t,i=e.unit,n=e.font,r=e.responsive;return{font:babelHelpers.objectSpread({},n.textLarge,n.bold,(t={fontSize:3*i,lineHeight:"".concat(3.75*i,"px")},babelHelpers.defineProperty(t,r.mediumAndAbove,{fontSize:4*i,lineHeight:"".concat(5*i,"px")}),babelHelpers.defineProperty(t,r.largeAndAbove,{fontSize:4.5*i}),t)),font_preventWordBreak:{overflowWrap:"normal"}}})(l)},Fyk5:function(e,t,i){"use strict";i.d(t,"a",function(){return a});var n=i("G4qV"),r=i("Dleu"),s=Object(n.createSelector)(r.j,function(e){return e.similarListingsInfo}),a=(Object(n.createSelector)(s,function(e){return e.similarListings}),Object(n.createSelector)(s,function(e){return e.metadata}))},GJnk:function(e,t,i){"use strict";i.d(t,"a",function(){return o});var n=i("q1tI"),r=i.n(n),s=i("BsrZ");function a(){return(e=new Promise(function(t){Promise.all([window._phrasesManifest._getPhrases(["c43f","1dba","b787","c709"],"cVPA","V6kB",i),i.e("c43f"),i.e("1dba"),i.e("b787"),i.e("c709")]).then(function(e){t(babelHelpers.interopRequireWildcard(i("p0yk")))}.bind(null,i)).catch(i.oe)}),t="SelectPDP-SelectSimilarListings",e.chunkName=t,e).then(function(e){return e.default||e});var e,t}function o(e){return r.a.createElement(s.b,babelHelpers.extends({loader:a,renderPlaceholder:s.d},e))}},J1Ip:function(e,t,i){"use strict";i.r(t);var n=i("q1tI"),f=i.n(n),r=i("fArA"),s=i("j/eu"),l=i.n(s),p=i("YKbr"),a=i("I9Za"),o=i.n(a),c=i("DhiP"),d=i.n(c),b=i("uuth"),u=i("ILXQ"),h=i.n(u),g=i("yn6H"),m=i("Fcei"),_=i("J6oQ"),v=i("+N5r"),L=i("TY5r"),w=i("Lya3"),y=i("K/Jt"),S=i("ZesN"),E=i("G4Ho"),P=i("1Une"),I=i("htP+"),x=i("acAX"),C=i("DSE6"),O=i("i2/T"),R=i("yCVm"),k=i("Ri7V"),j=i("1GLC"),T=i("LaSM"),D=i("6wxO"),B=i("38wa"),H=i("pqj/"),M=i("Fyk5"),A=i("/MBQ"),N=i("diFe");function q(e){var t=e.checkIn,i=e.checkOut,n=e.guests,r=e.guestDetails,s={guests:n};return r&&(s.adults=r.adults,s.children=r.children,s.infants=r.infants),t&&i&&(s.check_in=t,s.check_out=i),s}function W(){var e=o.a.locale();return"zh"===e||"en"===e?e:"other"}function F(e){return!e.causeId&&!e.disasterId}function G(e){var t=e.isFetchingSimilarListings,i=e.hasScrolled,n=e.ownListingId,r=e.similarListings,s=e.storeListingId,a=e.tripDetails;return i&&(!r||s!==n)&&!t&&F(a)}var z={hasScrolled:!1,onSectionEnter:function(){},similarListings:null,similarListingsMetadata:null,storeListingId:null,template:B.c},V=function(i){function e(e){var t;return(t=i.call(this,e)||this).handleCardRowSliderImpression=t.handleCardRowSliderImpression.bind(babelHelpers.assertThisInitialized(t)),t.handleCardRowSliderScroll=t.handleCardRowSliderScroll.bind(babelHelpers.assertThisInitialized(t)),t.handleListingInfoPress=t.handleListingInfoPress.bind(babelHelpers.assertThisInitialized(t)),t.handleListingPhotoPress=t.handleListingPhotoPress.bind(babelHelpers.assertThisInitialized(t)),t.handleListingWishlistButtonPress=t.handleListingWishlistButtonPress.bind(babelHelpers.assertThisInitialized(t)),t.handleExpandPress=t.handleExpandPress.bind(babelHelpers.assertThisInitialized(t)),t.setExpandedListingsCardGridRef=t.setExpandedListingsCardGridRef.bind(babelHelpers.assertThisInitialized(t)),t.state={expanded:!1},t}babelHelpers.inheritsLoose(e,i);var t=e.prototype;return t.componentDidMount=function(){var e=this.props,t=e.fetchSimilarListings,i=e.isFetchingSimilarListings,n=e.hasScrolled,r=e.listingId,s=e.similarListings,a=e.storeListingId,o=e.tripDetails,l=G({isFetchingSimilarListings:i,hasScrolled:n,ownListingId:r,similarListings:s,storeListingId:a,tripDetails:o}),c=Object(R.a)().sl_alternate_dates_exclusion;l&&t(r,q(o),"true"!==c)},t.componentDidUpdate=function(e,t){var i=this,n=e.hasScrolled,r=e.tripDetails,s=t.expanded,a=this.props,o=a.fetchSimilarListings,l=a.hasScrolled,c=a.listingId,d=a.tripDetails,u=this.state.expanded,p=!!n!=!!l,h=l&&!Object(y.a)(Object(w.a)(r,"previousTripDetailsState"),Object(w.a)(d,"previousTripDetailsState")),g=Object(R.a)().sl_alternate_dates_exclusion;F(d)&&(p||h)&&o(c,q(d),"true"!==g),!s&&u&&this.expandedListingsCardGridRef&&setTimeout(function(){return Object(_.a)(i.expandedListingsCardGridRef)})},t.setExpandedListingsCardGridRef=function(e){this.expandedListingsCardGridRef=e},t.queueNavEvent=function(e){var t=this.props,i=t.listingId,n=t.similarListings;l.a.queueEvent({event_name:"similar listings",event_data:{datadog_key:"similar_listings_events",datadog_tags:["page:p3","section:similar_listings_listing","operation:click","locale:".concat(W()),"is_moweb:".concat(Object(x.c)()||Object(x.f)())],sub_event:"similar_listings_listing",operation:"click",hosting_id:i,recommendation_id:e,similar_listings:n.map(function(e){return e.listing.id}),page:"p3"}})},t.logSaveEvent=function(t){var e=this.props,i=e.listingId,n=e.similarListings.find(function(e){return e.listing.id===t}).pricing_quote,r=n.check_in,s=n.check_out,a=n.guests,o="similar_listings_wishlist";l.a.logEvent({event_name:"similar listings",event_data:{datadog_key:"similar_listings_events",datadog_tags:["page:p3","section:".concat(o),"operation:".concat("click"),"locale:".concat(W()),"is_moweb:".concat(Object(x.c)()||Object(x.f)())],page:"p3",section:o,operation:"click",hosting_id:i,recommendation_id:t,checkin:r,checkout:s,guests:a}}),this.logJitneyEvent({target:"similar_listings_wishlist",pdpContext:{similar_listing_id:String(t)}})},t.logCardImpressionsEvent=function(e){var t=this.props.listingId,i="similar_listings_slider";l.a.logEvent({event_name:"similar listings",event_data:{datadog_key:"similar_listings_events",datadog_tags:["page:p3","section:".concat(i),"operation:".concat("click"),"locale:".concat(W()),"is_moweb:".concat(Object(x.c)()||Object(x.f)())],page:"p3",section:i,operation:"click",hosting_id:t,recommendation_ids:e.map(function(e){var t=e.key;return Number(t)})}}),this.logJitneyEvent({target:"similar_listings_slider",operation:p.Operation.Impression})},t.logJitneyEvent=function(e){var t=e.target,i=e.pdpContext,n=void 0===i?{}:i,r=e.operation,s=void 0===r?p.Operation.Click:r,a=this.props,o=a.listingId,l=a.pdpPageTypeForLogging,c=a.sectionNameForLogging,d=a.similarListings,u={pdp_context:babelHelpers.objectSpread({similar_listing_id_set:d.map(function(e){return e.listing.id}).join(",")},n),product_id:o,section:c,target:t,operation:s};Object(D.b)(l,u,!0)},t.logCardPressEvent=function(e){var t=this.props.currentBreakpoint;this.logJitneyEvent({pdpContext:{similar_listing_id:String(e)},target:"similar_listing"}),t===m.a.SMALL&&k.a.getBootstrap("p3_moweb_open_similar_listing_on_new_tab")&&h.a.deliverExperiment("p3_moweb_open_similar_listing_on_new_tab",O.b),t===m.a.SMALL&&k.a.getBootstrap("p3_client_route_similar_listing_v2")&&h.a.deliverExperiment("p3_client_route_similar_listing_v2",O.b)},t.handleCardRowSliderImpression=function(e){e&&0!==e.length&&this.logCardImpressionsEvent(e)},t.handleCardRowSliderScroll=function(e){this.logJitneyEvent({target:-1===e?"previous":"next"})},t.handleListingInfoPress=function(e,t){var i=t.id;this.queueNavEvent(i),this.logCardPressEvent(i)},t.handleListingPhotoPress=function(e,t){var i=t.id;this.queueNavEvent(i),this.logCardPressEvent(i)},t.handleListingWishlistButtonPress=function(e,t){var i=this.props,n=i.listingHeartClicked,r=i.wishLists;this.logSaveEvent(e.id),n(e,r,t,d.a.isLoggedIn(),P.a.P3_SIMILAR_LISTINGS)},t.handleExpandPress=function(){this.logJitneyEvent({target:"see_more_homes"}),this.setState({expanded:!0})},t.render=function(){var e=this.props,t=e.experiments,i=t.clientRouteSimilarListing,n=t.bingoLayout,r=t.showDecimalStarRating,s=t.showOneAndHalfSimilarListingsCards,a=e.isRingo,o=e.fetchSimilarListingsError,l=e.listingId,c=e.onSectionEnter,d=e.shouldRenderFetching,u=e.similarListings,p=e.similarListingsMetadata,h=e.template,g=e.tripDetails,m=this.state.expanded;return f.a.createElement("div",{"data-veloute":"similar-listings"},f.a.createElement(b.a,{bottomOffset:"-100%",onEnter:c,scrollableAncestor:"window",topOffset:"-100%"}),f.a.createElement(A.a,babelHelpers.extends({},Object(L.a)(this.props,Object.keys(C.d)),Object(L.a)(this.props,Object.keys(I.b)),{expanded:m,fetchSimilarListingsError:o,bingoLayout:n,listingId:l,onCardRowSliderImpression:this.handleCardRowSliderImpression,onCardRowSliderScroll:this.handleCardRowSliderScroll,onExpandPress:this.handleExpandPress,onListingInfoPress:this.handleListingInfoPress,onListingPhotoPress:this.handleListingPhotoPress,onListingWishlistButtonPress:this.handleListingWishlistButtonPress,setExpandedListingsCardGridRef:this.setExpandedListingsCardGridRef,shouldClientRoute:i,shouldRenderFetching:d,similarListings:u,similarListingsMetadata:p,template:h,tripDetails:g,showDecimalStarRating:r,showMoreCards:a||s,isRingo:a})))},e}(f.a.Component);V.defaultProps=z,t.default=Object(r.compose)(I.a,j.a,g.a,Object(C.a)({clientRouteSimilarListing:Object(C.b)({experimentName:"p3_client_route_similar_listing_v2",trebuchetName:"p3_client_route_similar_listing_v2",treatmentSnippets:O.b,shouldLogSelector:function(){return!1},experimentEnabled:function(e){return e.currentBreakpoint===m.a.SMALL}}),showOneAndHalfSimilarListingsCards:Object(C.b)({experimentName:"p3_show_one_and_half_similar_listings_cards_v2",trebuchetName:"p3_show_one_and_half_similar_listings_cards_v2",treatmentSnippets:O.b,shouldLogSelector:function(){return!1},experimentEnabled:function(e){var t=e.currentBreakpoint;return"zh"!==o.a.language()&&t===m.a.SMALL}}),showDecimalStarRating:E.a,bingoLayout:v.b}),Object(S.a)(function(e,t){var i=e.homePDP.similarListingsInfo,n=i.fetchSimilarListingsError,r=i.hasScrolled,s=i.isFetchingSimilarListings,a=i.listingId,o=i.similarListings,l=t.listing.id,c=Object(M.a)(e),d=Object(H.o)(e),u=G({hasScrolled:!1,isFetchingSimilarListings:s,ownListingId:l,similarListings:o,storeListingId:a,tripDetails:d});return{fetchSimilarListingsError:n,hasScrolled:r,isFetchingSimilarListings:s,listingId:l,shouldRenderFetching:s||u,similarListings:o,similarListingsMetadata:c,storeListingId:a,tripDetails:d}},{fetchSimilarListings:T.a,onSectionEnter:T.b}),N.a)(V)},LaSM:function(e,t,i){"use strict";i.d(t,"a",function(){return r}),i.d(t,"b",function(){return s});var n=i("zLbU"),m=i.n(n),f=i("sUPM"),b=i("LS6L"),_=i("7bXm");function r(e,t,i){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:12,r=Object(b.q)(t),s=r.guests,a=r.guestDetails,o=r.isoCheckin,l=r.isoCheckout,c=r.localizedCheckin,d=r.localizedCheckout,u=t.filterInstantBook,p=c?Object(b.h)(c):o,h=d?Object(b.h)(d):l,g=Promise.resolve(m.a.get("/v2/similar_listings",{data:{_format:"for_listing_card",_limit:n,check_in:p,check_out:h,filter_instant_book:u,guests:s,adults:a.adults,children:a.children,infants:a.infants,listing_id:e,p3_impression_id:Object(f.a)(),fetch_alternative_dates:i}}));return{type:_.a,promise:g.then(function(e){return{metadata:e.metadata,similarListings:e.similar_listings}},function(){return Promise.reject()}),meta:{listingId:e}}}function s(){return{type:_.b}}},RBny:function(e,t,i){"use strict";function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(i,!0).forEach(function(e){s(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,i){return t&&o(e.prototype,t),i&&o(e,i),e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ContextInstance=void 0;var c=function(){function e(){a(this,e),this.isResolved=!1,this.resolvedValue=null,this.updaters=[]}return l(e,[{key:"get",value:function(){return this.resolve(),this.resolvedValue}},{key:"set",value:function(e,t){var i;i="function"!=typeof t?function(e){return r({},e,{},t)}:t,this.updaters[e]=i}},{key:"resolve",value:function(){this.isResolved||(this.resolvedValue=this.updaters.filter(function(e){return!!e}).reduce(function(e,t){return t(e)},{}),this.updaters=[],this.isResolved=!0)}}]),e}();t.ContextInstance=c;var d=function(){function t(e){a(this,t),this.name=e,this.instances=new WeakMap}return l(t,[{key:"getInstance",value:function(e){if(!this.instances.has(e)){var t=new c;this.instances.set(e,t)}return this.instances.get(e)}}]),t}();t.default=d},"Xf/3":function(e,t,i){"use strict";i.d(t,"a",function(){return d});var n=i("9pTB"),r=i.n(n),s=i("T4Uw"),a=i.n(s),o=i("ILXQ"),l=i.n(o),c=i("i2/T");function d(i){return r.a.setIfMissingThenGet("pwaCdnExperiments.".concat(i),function(){var e=a.a.get("pwaCdnExperiments");if(e&&e[i]){var t=e[i];return l.a.logCustomHashing(i,t),t}return c.d})}},diFe:function(e,t,i){"use strict";i.d(t,"a",function(){return p});var n=i("q1tI"),r=i.n(n),s=i("17x9"),a=i.n(s),o=i("Ri7V"),l=i("pPLv"),c=i("2mql"),d=i.n(c),u=i("Xf/3");a.a.bool;function p(i){var e=function(e){function t(){return e.apply(this,arguments)||this}return babelHelpers.inheritsLoose(t,e),t.prototype.render=function(){var e=this.context[l.a],t=!1;return o.a.getBootstrap("pwa_pdp_ia_force_in")?t=!0:o.a.getBootstrap("pwa_pdp_ia")&&(t="treatment"===Object(u.a)("pwa_pdp_ia")),r.a.createElement(i,babelHelpers.extends({},this.props,{isRingo:e&&t}))},t}(r.a.PureComponent);e.WrappedComponent=i,e.contextTypes=l.b,i.propTypes,i.defaultProps&&(e.defaultProps=i.defaultProps);var t=i.displayName||i.name||"Component";return e.displayName="withMowebLion(".concat(t,")"),d()(e,i)}},"fs/r":function(e,t,i){e.exports=i("j2on")},j2on:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.consumesContext=t.providesContext=t.createContext=void 0;var r=s(i("oZHa")),n=s(i("RBny"));function s(e){return e&&e.__esModule?e:{default:e}}t.createContext=function(e){return new n.default(e)};t.providesContext=function(t){var i;try{i=t.getInstance(r.default.getCurrentRequest())}catch(e){throw new Error("Error while getting an instance of ".concat(t,". Is `providesContext` being ")+"used in the middleware instead of the middleware creator? Or maybe the context hasn't been created yet?")}var n=r.default.provide(t);return{get:function(){throw new Error("Can't call `get` on a context instance that's being provided by this middleware. If you need to read the value of this context, it should be \"consumed\" by this middleware with `consumesContext`.")},set:function(e){return i.set(n,e)}}};t.consumesContext=function(t){var e;try{e=t.getInstance(r.default.getCurrentRequest())}catch(e){throw new Error("Error while getting an instance of ".concat(t,". Is `consumesContext` being ")+"used in the middleware instead of the middleware creator? Or maybe the context hasn't been created yet?")}return r.default.consume(t),{get:function(){return e.get()},set:function(){throw new Error("Can't call `set` on a context instance that's being consumed by this middleware. If you need to modify this context, it should be \"provided\" by this middleware with `providesContext`.")}}}},oZHa:function(e,t,i){"use strict";function r(e){return a(e)||s(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function a(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ContextTracker=void 0;var c=function(){function e(){o(this,e),this.provided=new Set,this.consumed=new Set,this.currentRequest=null,this.providedOrder=10}var t,i,n;return t=e,(i=[{key:"start",value:function(e){this.provided=new Set,this.consumed=new Set,this.currentRequest=e}},{key:"stop",value:function(){var e={provided:r(this.provided),consumed:r(this.consumed)};return this.provided=new Set,this.consumed=new Set,this.currentRequest=null,e}},{key:"reset",value:function(){this.providedOrder=10}},{key:"provide",value:function(e){if(this.consumed.has(e))throw new Error("You cannot provide a context that has already been consumed by this middleware. If you'd like to update the data in this context, you should *only* provide it, and use the `set` method on the context instance to update it.");return this.provided.add(e),this.providedOrder+=1,this.providedOrder}},{key:"consume",value:function(e){if(this.provided.has(e))throw new Error("You cannot consume a context that has already been provided by this middleware. If you'd like to access the data in this context, you should *only* consume it, and use the `get` method on the context instance to read its value.");this.consumed.add(e)}},{key:"getCurrentRequest",value:function(){return this.currentRequest}}])&&l(t.prototype,i),n&&l(t,n),e}(),d=new(t.ContextTracker=c);t.default=d},t7bN:function(e,t,i){"use strict";i.d(t,"a",function(){return o});var n=i("q1tI"),r=i.n(n),s=i("BsrZ");function a(){return(e=new Promise(function(t){Promise.all([window._phrasesManifest._getPhrases(["c43f","2b39","2996","fc0a","1dba","b787","9310","19b1"],"cVPA","V6kB",i),i.e("c43f"),i.e("2b39"),i.e("2996"),i.e("fc0a"),i.e("1dba"),i.e("b787"),i.e("9310"),i.e("19b1")]).then(function(e){t(babelHelpers.interopRequireWildcard(i("XB41")))}.bind(null,i)).catch(i.oe)}),t="MarketplacePDP-SimilarListings",e.chunkName=t,e).then(function(e){return e.default||e});var e,t}function o(e){return r.a.createElement(s.b,babelHelpers.extends({loader:a,renderPlaceholder:s.d},e))}}}]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/967a-cf4debe3.js.map