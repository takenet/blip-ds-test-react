"use strict";(self.webpackChunkblip_ds_react=self.webpackChunkblip_ds_react||[]).push([[7535],{7535:function(t,e,a){a.r(e),a.d(e,{bds_table:function(){return i}});var r=a(6189),i=function(){function t(t){(0,r.r)(this,t),this.headerData=[],this.tableData=[],this.avatar=!1,this.sorting=!1}return t.prototype.componentWillLoad=function(){this.getDataFromProprety()},t.prototype.getDataFromProprety=function(){this.options,this.headerData=JSON.parse(this.column),this.tableData=JSON.parse(this.options)},t.prototype.renderArrow=function(t){return t?(0,r.h)("bds-icon",{name:"arrow-up",size:"small"}):null},t.prototype.orderColumn=function(t){this.headerActive=t,this.sortAscending=!this.sortAscending,!1===this.sortAscending?this.tableData.sort((function(e,a){return e[t]>a[t]?1:-1})):this.tableData.sort((function(e,a){return e[t]>a[t]?-1:1}))},t.prototype.render=function(){var t=this;return(0,r.h)(r.H,null,(0,r.h)("table",{class:"table"},(0,r.h)("thead",{class:"thead"},(0,r.h)("tr",{class:"header"},this.headerData.map((function(e,a){return(0,r.h)("th",{class:"header-title",key:a},t.sorting?(0,r.h)("bds-typo",{class:"title-click",onClick:function(){return t.orderColumn(e.value)},variant:"fs-14",bold:t.headerActive==="".concat(e.value)?"bold":"regular"},e.heading):(0,r.h)("bds-typo",{variant:"fs-14",bold:"regular"},e.heading),!0===t.sortAscending&&!0===t.sorting&&t.headerActive==="".concat(e.value)?(0,r.h)("bds-icon",{class:"header-icon",name:"arrow-up",size:"small"}):!1===t.sortAscending&&!0===t.sorting&&t.headerActive==="".concat(e.value)?(0,r.h)("bds-icon",{name:"arrow-down",size:"small"}):"")})))),(0,r.h)("tbody",null,this.tableData.map((function(e,a){return(0,r.h)("tr",{class:"body-row",key:a},t.headerData.map((function(a,i){return(0,r.h)("td",{class:"body-item",key:i},t.avatar&&a.img?(0,r.h)("bds-avatar",{size:"extra-small",thumbnail:e["".concat(a.thumb)],name:e["".concat(a.value)]}):"",(0,r.h)("bds-typo",{variant:"fs-14",bold:t.headerActive==="".concat(a.value)?"bold":"regular"},e["".concat(a.value)]))})))})))))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,r.g)(this)},enumerable:!1,configurable:!0}),t}();i.style=':host{display:block}:host .table{display:grid;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif;color:#202c44;width:100%;border:1px solid #d2dfe6;border-radius:8px;overflow-x:auto;padding:16px;background-color:#ffffff}:host .table .thead{border-bottom:2px solid #d2dfe6;padding:8px 16px}:host .table .thead .header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;height:64px;gap:16px}:host .table .thead .header .header-title{height:48px;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;gap:8px}:host .table .thead .header .header-title .title-click{cursor:pointer}:host .table .body-row{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;height:64px;padding:0px 8px;gap:16px;border-bottom:1px solid #e7edf4}:host .table .body-row .body-item{height:48px;width:100%;gap:8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start}'}}]);
//# sourceMappingURL=7535.e3308127.chunk.js.map