(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[75],{"4yiN":function(e,t,n){"use strict";n.r(t),n.d(t,"setupTypeScript",(function(){return M})),n.d(t,"setupJavaScript",(function(){return E})),n.d(t,"getJavaScriptWorker",(function(){return K})),n.d(t,"getTypeScriptWorker",(function(){return R}));var r,i=n("v0SU"),o=function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{u(r.next(e))}catch(t){o(t)}}function a(e){try{u(r["throw"](e))}catch(t){o(t)}}function u(e){e.done?n(e.value):i(e.value).then(s,a)}u((r=r.apply(e,t||[])).next())}))},s=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},a=function(){function e(e,t){var n=this;this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()})),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((function(){return n._updateExtraLibs()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},e.prototype._updateExtraLibs=function(){return o(this,void 0,void 0,(function(){var e,t;return s(this,(function(n){switch(n.label){case 0:return this._worker?(e=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return t=n.sent(),this._updateExtraLibsToken!==e?[2]:(t.updateExtraLibs(this._defaults.getExtraLibs()),[2])}}))}))},e.prototype._getClient=function(){var e=this;if(!this._client){this._worker=i["editor"].createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath}});var t=this._worker.getProxy();this._defaults.getEagerModelSync()&&(t=t.then((function(t){return e._worker?e._worker.withSyncedResources(i["editor"].getModels().filter((function(t){return t.getModeId()===e._modeId})).map((function(e){return e.uri}))):t}))),this._client=t}return this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then((function(t){e=t})).then((function(e){if(t._worker)return t._worker.withSyncedResources(n)})).then((function(t){return e}))},e}(),u={"lib.d.ts":!0,"lib.dom.d.ts":!0,"lib.dom.iterable.d.ts":!0,"lib.es2015.collection.d.ts":!0,"lib.es2015.core.d.ts":!0,"lib.es2015.d.ts":!0,"lib.es2015.generator.d.ts":!0,"lib.es2015.iterable.d.ts":!0,"lib.es2015.promise.d.ts":!0,"lib.es2015.proxy.d.ts":!0,"lib.es2015.reflect.d.ts":!0,"lib.es2015.symbol.d.ts":!0,"lib.es2015.symbol.wellknown.d.ts":!0,"lib.es2016.array.include.d.ts":!0,"lib.es2016.d.ts":!0,"lib.es2016.full.d.ts":!0,"lib.es2017.d.ts":!0,"lib.es2017.full.d.ts":!0,"lib.es2017.intl.d.ts":!0,"lib.es2017.object.d.ts":!0,"lib.es2017.sharedmemory.d.ts":!0,"lib.es2017.string.d.ts":!0,"lib.es2017.typedarrays.d.ts":!0,"lib.es2018.asyncgenerator.d.ts":!0,"lib.es2018.asynciterable.d.ts":!0,"lib.es2018.d.ts":!0,"lib.es2018.full.d.ts":!0,"lib.es2018.intl.d.ts":!0,"lib.es2018.promise.d.ts":!0,"lib.es2018.regexp.d.ts":!0,"lib.es2019.array.d.ts":!0,"lib.es2019.d.ts":!0,"lib.es2019.full.d.ts":!0,"lib.es2019.object.d.ts":!0,"lib.es2019.string.d.ts":!0,"lib.es2019.symbol.d.ts":!0,"lib.es2020.bigint.d.ts":!0,"lib.es2020.d.ts":!0,"lib.es2020.full.d.ts":!0,"lib.es2020.intl.d.ts":!0,"lib.es2020.promise.d.ts":!0,"lib.es2020.string.d.ts":!0,"lib.es2020.symbol.wellknown.d.ts":!0,"lib.es5.d.ts":!0,"lib.es6.d.ts":!0,"lib.esnext.d.ts":!0,"lib.esnext.full.d.ts":!0,"lib.esnext.intl.d.ts":!0,"lib.esnext.promise.d.ts":!0,"lib.esnext.string.d.ts":!0,"lib.scripthost.d.ts":!0,"lib.webworker.d.ts":!0,"lib.webworker.importscripts.d.ts":!0},l=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c=function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{u(r.next(e))}catch(t){o(t)}}function a(e){try{u(r["throw"](e))}catch(t){o(t)}}function u(e){e.done?n(e.value):i(e.value).then(s,a)}u((r=r.apply(e,t||[])).next())}))},d=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}};function f(e,t,n){if(void 0===n&&(n=0),"string"===typeof e)return e;if(void 0===e)return"";var r="";if(n){r+=t;for(var i=0;i<n;i++)r+="  "}if(r+=e.messageText,n++,e.next)for(var o=0,s=e.next;o<s.length;o++){var a=s[o];r+=f(a,t,n)}return r}function p(e){return e?e.map((function(e){return e.text})).join(""):""}(function(e){e[e["None"]=0]="None",e[e["Block"]=1]="Block",e[e["Smart"]=2]="Smart"})(r||(r={}));var g,h=function(){function e(e){this._worker=e}return e.prototype._textSpanToRange=function(e,t){var n=e.getPositionAt(t.start),r=e.getPositionAt(t.start+t.length),i=n.lineNumber,o=n.column,s=r.lineNumber,a=r.column;return{startLineNumber:i,startColumn:o,endLineNumber:s,endColumn:a}},e}(),m=function(){function e(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}return e.prototype.isLibFile=function(e){return!!e&&(0===e.path.indexOf("/lib.")&&!!u[e.path.slice(1)])},e.prototype.getOrCreateModel=function(e){var t=i["editor"].getModel(e);return t||(this.isLibFile(e)&&this._hasFetchedLibFiles?i["editor"].createModel(this._libFiles[e.path.slice(1)],"javascript",e):null)},e.prototype._containsLibFile=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];if(this.isLibFile(r))return!0}return!1},e.prototype.fetchLibFilesIfNecessary=function(e){return c(this,void 0,void 0,(function(){return d(this,(function(t){switch(t.label){case 0:return this._containsLibFile(e)?[4,this._fetchLibFiles()]:[2];case 1:return t.sent(),[2]}}))}))},e.prototype._fetchLibFiles=function(){var e=this;return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((function(e){return e.getLibFiles()})).then((function(t){e._hasFetchedLibFiles=!0,e._libFiles=t}))),this._fetchLibFilesPromise},e}();(function(e){e[e["Warning"]=0]="Warning",e[e["Error"]=1]="Error",e[e["Suggestion"]=2]="Suggestion",e[e["Message"]=3]="Message"})(g||(g={}));var b=function(e){function t(t,n,r,o){var s=e.call(this,o)||this;s._libFiles=t,s._defaults=n,s._selector=r,s._disposables=[],s._listener=Object.create(null);var a=function(e){if(e.getModeId()===r){var t,n=e.onDidChangeContent((function(){clearTimeout(t),t=setTimeout((function(){return s._doValidate(e)}),500)}));s._listener[e.uri.toString()]={dispose:function(){n.dispose(),clearTimeout(t)}},s._doValidate(e)}},u=function(e){i["editor"].setModelMarkers(e,s._selector,[]);var t=e.uri.toString();s._listener[t]&&(s._listener[t].dispose(),delete s._listener[t])};s._disposables.push(i["editor"].onDidCreateModel(a)),s._disposables.push(i["editor"].onWillDisposeModel(u)),s._disposables.push(i["editor"].onDidChangeModelLanguage((function(e){u(e.model),a(e.model)}))),s._disposables.push({dispose:function(){for(var e=0,t=i["editor"].getModels();e<t.length;e++){var n=t[e];u(n)}}});var l=function(){for(var e=0,t=i["editor"].getModels();e<t.length;e++){var n=t[e];u(n),a(n)}};return s._disposables.push(s._defaults.onDidChange(l)),s._disposables.push(s._defaults.onDidExtraLibsChange(l)),i["editor"].getModels().forEach(a),s}return l(t,e),t.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},t.prototype._doValidate=function(e){return c(this,void 0,void 0,(function(){var t,n,r,o,s,a,u,l,c,f=this;return d(this,(function(d){switch(d.label){case 0:return[4,this._worker(e.uri)];case 1:return t=d.sent(),e.isDisposed()?[2]:(n=[],r=this._defaults.getDiagnosticsOptions(),o=r.noSyntaxValidation,s=r.noSemanticValidation,a=r.noSuggestionDiagnostics,o||n.push(t.getSyntacticDiagnostics(e.uri.toString())),s||n.push(t.getSemanticDiagnostics(e.uri.toString())),a||n.push(t.getSuggestionDiagnostics(e.uri.toString())),[4,Promise.all(n)]);case 2:return u=d.sent(),!u||e.isDisposed()?[2]:(l=u.reduce((function(e,t){return t.concat(e)}),[]).filter((function(e){return-1===(f._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)})),c=l.map((function(e){return e.relatedInformation||[]})).reduce((function(e,t){return t.concat(e)}),[]).map((function(e){return e.file?i["Uri"].parse(e.file.fileName):null})),[4,this._libFiles.fetchLibFilesIfNecessary(c)]);case 3:return d.sent(),e.isDisposed()?[2]:(i["editor"].setModelMarkers(e,this._selector,l.map((function(t){return f._convertDiagnostics(e,t)}))),[2])}}))}))},t.prototype._convertDiagnostics=function(e,t){var n=t.start||0,r=t.length||1,o=e.getPositionAt(n),s=o.lineNumber,a=o.column,u=e.getPositionAt(n+r),l=u.lineNumber,c=u.column,d=[];return t.reportsUnnecessary&&d.push(i["MarkerTag"].Unnecessary),t.reportsDeprecated&&d.push(i["MarkerTag"].Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:s,startColumn:a,endLineNumber:l,endColumn:c,message:f(t.messageText,"\n"),code:t.code.toString(),tags:d,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}},t.prototype._convertRelatedInformation=function(e,t){var n=this;if(t){var r=[];return t.forEach((function(t){var o=e;if(t.file){var s=i["Uri"].parse(t.file.fileName);o=n._libFiles.getOrCreateModel(s)}if(o){var a=t.start||0,u=t.length||1,l=o.getPositionAt(a),c=l.lineNumber,d=l.column,p=o.getPositionAt(a+u),g=p.lineNumber,h=p.column;r.push({resource:o.uri,startLineNumber:c,startColumn:d,endLineNumber:g,endColumn:h,message:f(t.messageText,"\n")})}})),r}},t.prototype._tsDiagnosticCategoryToMarkerSeverity=function(e){switch(e){case g.Error:return i["MarkerSeverity"].Error;case g.Message:return i["MarkerSeverity"].Info;case g.Warning:return i["MarkerSeverity"].Warning;case g.Suggestion:return i["MarkerSeverity"].Hint}return i["MarkerSeverity"].Info},t}(h),v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),Object.defineProperty(t.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!1,configurable:!0}),t.prototype.provideCompletionItems=function(e,n,r,o){return c(this,void 0,void 0,(function(){var r,o,s,a,u,l,c;return d(this,(function(d){switch(d.label){case 0:return r=e.getWordUntilPosition(n),o=new i["Range"](n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),s=e.uri,a=e.getOffsetAt(n),[4,this._worker(s)];case 1:return u=d.sent(),[4,u.getCompletionsAtPosition(s.toString(),a)];case 2:return l=d.sent(),!l||e.isDisposed()?[2]:(c=l.entries.map((function(r){var u,l=o;if(r.replacementSpan){var c=e.getPositionAt(r.replacementSpan.start),d=e.getPositionAt(r.replacementSpan.start+r.replacementSpan.length);l=new i["Range"](c.lineNumber,c.column,d.lineNumber,d.column)}var f=[];return-1!==(null===(u=r.kindModifiers)||void 0===u?void 0:u.indexOf("deprecated"))&&f.push(i["languages"].CompletionItemTag.Deprecated),{uri:s,position:n,offset:a,range:l,label:r.name,insertText:r.name,sortText:r.sortText,kind:t.convertKind(r.kind),tags:f}})),[2,{suggestions:c}])}}))}))},t.prototype.resolveCompletionItem=function(e,n){return c(this,void 0,void 0,(function(){var n,r,i,o,s,a;return d(this,(function(u){switch(u.label){case 0:return n=e,r=n.uri,i=n.position,o=n.offset,[4,this._worker(r)];case 1:return s=u.sent(),[4,s.getCompletionEntryDetails(r.toString(),o,n.label)];case 2:return a=u.sent(),a?[2,{uri:r,position:i,label:a.name,kind:t.convertKind(a.kind),detail:p(a.displayParts),documentation:{value:t.createDocumentationString(a)}}]:[2,n]}}))}))},t.convertKind=function(e){switch(e){case F.primitiveType:case F.keyword:return i["languages"].CompletionItemKind.Keyword;case F.variable:case F.localVariable:return i["languages"].CompletionItemKind.Variable;case F.memberVariable:case F.memberGetAccessor:case F.memberSetAccessor:return i["languages"].CompletionItemKind.Field;case F.function:case F.memberFunction:case F.constructSignature:case F.callSignature:case F.indexSignature:return i["languages"].CompletionItemKind.Function;case F.enum:return i["languages"].CompletionItemKind.Enum;case F.module:return i["languages"].CompletionItemKind.Module;case F.class:return i["languages"].CompletionItemKind.Class;case F.interface:return i["languages"].CompletionItemKind.Interface;case F.warning:return i["languages"].CompletionItemKind.File}return i["languages"].CompletionItemKind.Property},t.createDocumentationString=function(e){var t=p(e.documentation);if(e.tags)for(var n=0,r=e.tags;n<r.length;n++){var i=r[n];t+="\n\n"+y(i)}return t},t}(h);function y(e){var t="*@"+e.name+"*";if("param"===e.name&&e.text){var n=e.text.split(" "),r=n[0],i=n.slice(1);t+="`"+r+"`",i.length>0&&(t+=" \u2014 "+i.join(" "))}else e.text&&(t+=" \u2014 "+e.text);return t}var _=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.signatureHelpTriggerCharacters=["(",","],t}return l(t,e),t.prototype.provideSignatureHelp=function(e,t,n){return c(this,void 0,void 0,(function(){var n,r,i,o,s;return d(this,(function(a){switch(a.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return i=a.sent(),[4,i.getSignatureHelpItems(n.toString(),r)];case 2:return o=a.sent(),!o||e.isDisposed()?[2]:(s={activeSignature:o.selectedItemIndex,activeParameter:o.argumentIndex,signatures:[]},o.items.forEach((function(e){var t={label:"",parameters:[]};t.documentation={value:p(e.documentation)},t.label+=p(e.prefixDisplayParts),e.parameters.forEach((function(n,r,i){var o=p(n.displayParts),s={label:o,documentation:{value:p(n.documentation)}};t.label+=o,t.parameters.push(s),r<i.length-1&&(t.label+=p(e.separatorDisplayParts))})),t.label+=p(e.suffixDisplayParts),s.signatures.push(t)})),[2,{value:s,dispose:function(){}}])}}))}))},t}(h),w=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.provideHover=function(e,t,n){return c(this,void 0,void 0,(function(){var n,r,i,o,s,a,u;return d(this,(function(l){switch(l.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return i=l.sent(),[4,i.getQuickInfoAtPosition(n.toString(),r)];case 2:return o=l.sent(),!o||e.isDisposed()?[2]:(s=p(o.documentation),a=o.tags?o.tags.map((function(e){return y(e)})).join("  \n\n"):"",u=p(o.displayParts),[2,{range:this._textSpanToRange(e,o.textSpan),contents:[{value:"```typescript\n"+u+"\n```\n"},{value:s+(a?"\n\n"+a:"")}]}])}}))}))},t}(h),S=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.provideDocumentHighlights=function(e,t,n){return c(this,void 0,void 0,(function(){var n,r,o,s,a=this;return d(this,(function(u){switch(u.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return o=u.sent(),[4,o.getOccurrencesAtPosition(n.toString(),r)];case 2:return s=u.sent(),!s||e.isDisposed()?[2]:[2,s.map((function(t){return{range:a._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?i["languages"].DocumentHighlightKind.Write:i["languages"].DocumentHighlightKind.Text}}))]}}))}))},t}(h),k=function(e){function t(t,n){var r=e.call(this,n)||this;return r._libFiles=t,r}return l(t,e),t.prototype.provideDefinition=function(e,t,n){return c(this,void 0,void 0,(function(){var n,r,o,s,a,u,l,c,f,p;return d(this,(function(d){switch(d.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return o=d.sent(),[4,o.getDefinitionAtPosition(n.toString(),r)];case 2:return s=d.sent(),!s||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(s.map((function(e){return i["Uri"].parse(e.fileName)})))];case 3:if(d.sent(),e.isDisposed())return[2];for(a=[],u=0,l=s;u<l.length;u++)c=l[u],f=i["Uri"].parse(c.fileName),p=this._libFiles.getOrCreateModel(f),p&&a.push({uri:f,range:this._textSpanToRange(p,c.textSpan)});return[2,a]}}))}))},t}(h),x=function(e){function t(t,n){var r=e.call(this,n)||this;return r._libFiles=t,r}return l(t,e),t.prototype.provideReferences=function(e,t,n,r){return c(this,void 0,void 0,(function(){var n,r,o,s,a,u,l,c,f,p;return d(this,(function(d){switch(d.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return o=d.sent(),[4,o.getReferencesAtPosition(n.toString(),r)];case 2:return s=d.sent(),!s||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(s.map((function(e){return i["Uri"].parse(e.fileName)})))];case 3:if(d.sent(),e.isDisposed())return[2];for(a=[],u=0,l=s;u<l.length;u++)c=l[u],f=i["Uri"].parse(c.fileName),p=this._libFiles.getOrCreateModel(f),p&&a.push({uri:f,range:this._textSpanToRange(p,c.textSpan)});return[2,a]}}))}))},t}(h),C=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.provideDocumentSymbols=function(e,t){return c(this,void 0,void 0,(function(){var t,n,r,o,s,a=this;return d(this,(function(u){switch(u.label){case 0:return t=e.uri,[4,this._worker(t)];case 1:return n=u.sent(),[4,n.getNavigationBarItems(t.toString())];case 2:return r=u.sent(),!r||e.isDisposed()?[2]:(o=function(t,n,r){var s={name:n.text,detail:"",kind:I[n.kind]||i["languages"].SymbolKind.Variable,range:a._textSpanToRange(e,n.spans[0]),selectionRange:a._textSpanToRange(e,n.spans[0]),tags:[],containerName:r};if(n.childItems&&n.childItems.length>0)for(var u=0,l=n.childItems;u<l.length;u++){var c=l[u];o(t,c,s.name)}t.push(s)},s=[],r.forEach((function(e){return o(s,e)})),[2,s])}}))}))},t}(h),F=function(){function e(){}return e.unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e}(),I=Object.create(null);I[F.module]=i["languages"].SymbolKind.Module,I[F.class]=i["languages"].SymbolKind.Class,I[F.enum]=i["languages"].SymbolKind.Enum,I[F.interface]=i["languages"].SymbolKind.Interface,I[F.memberFunction]=i["languages"].SymbolKind.Method,I[F.memberVariable]=i["languages"].SymbolKind.Property,I[F.memberGetAccessor]=i["languages"].SymbolKind.Property,I[F.memberSetAccessor]=i["languages"].SymbolKind.Property,I[F.variable]=i["languages"].SymbolKind.Variable,I[F.const]=i["languages"].SymbolKind.Variable,I[F.localVariable]=i["languages"].SymbolKind.Variable,I[F.variable]=i["languages"].SymbolKind.Variable,I[F.function]=i["languages"].SymbolKind.Function,I[F.localFunction]=i["languages"].SymbolKind.Function;var P,D,A=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:r.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},t.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},t}(h),L=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){return c(this,void 0,void 0,(function(){var r,i,o,s,a,u=this;return d(this,(function(l){switch(l.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,this._worker(r)];case 1:return s=l.sent(),[4,s.getFormattingEditsForRange(r.toString(),i,o,A._convertOptions(n))];case 2:return a=l.sent(),!a||e.isDisposed()?[2]:[2,a.map((function(t){return u._convertTextChanges(e,t)}))]}}))}))},t}(A),T=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),Object.defineProperty(t.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!1,configurable:!0}),t.prototype.provideOnTypeFormattingEdits=function(e,t,n,r,i){return c(this,void 0,void 0,(function(){var i,o,s,a,u=this;return d(this,(function(l){switch(l.label){case 0:return i=e.uri,o=e.getOffsetAt(t),[4,this._worker(i)];case 1:return s=l.sent(),[4,s.getFormattingEditsAfterKeystroke(i.toString(),o,n,A._convertOptions(r))];case 2:return a=l.sent(),!a||e.isDisposed()?[2]:[2,a.map((function(t){return u._convertTextChanges(e,t)}))]}}))}))},t}(A),O=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.provideCodeActions=function(e,t,n,r){return c(this,void 0,void 0,(function(){var r,i,o,s,a,u,l,c,f=this;return d(this,(function(d){switch(d.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),s=A._convertOptions(e.getOptions()),a=n.markers.filter((function(e){return e.code})).map((function(e){return e.code})).map(Number),[4,this._worker(r)];case 1:return u=d.sent(),[4,u.getCodeFixesAtPosition(r.toString(),i,o,a,s)];case 2:return l=d.sent(),!l||e.isDisposed()?[2,{actions:[],dispose:function(){}}]:(c=l.filter((function(e){return 0===e.changes.filter((function(e){return e.isNewFile})).length})).map((function(t){return f._tsCodeFixActionToMonacoCodeAction(e,n,t)})),[2,{actions:c,dispose:function(){}}])}}))}))},t.prototype._tsCodeFixActionToMonacoCodeAction=function(e,t,n){for(var r=[],i=0,o=n.changes;i<o.length;i++)for(var s=o[i],a=0,u=s.textChanges;a<u.length;a++){var l=u[a];r.push({resource:e.uri,edit:{range:this._textSpanToRange(e,l.span),text:l.newText}})}var c={title:n.description,edit:{edits:r},diagnostics:t.markers,kind:"quickfix"};return c},t}(A),N=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.provideRenameEdits=function(e,t,n,r){return c(this,void 0,void 0,(function(){var r,o,s,a,u,l,c,f,p,g;return d(this,(function(d){switch(d.label){case 0:return r=e.uri,o=r.toString(),s=e.getOffsetAt(t),[4,this._worker(r)];case 1:return a=d.sent(),[4,a.getRenameInfo(o,s,{allowRenameOfImportPath:!1})];case 2:if(u=d.sent(),!1===u.canRename)return[2,{edits:[],rejectReason:u.localizedErrorMessage}];if(void 0!==u.fileToRename)throw new Error("Renaming files is not supported.");return[4,a.findRenameLocations(o,s,!1,!1,!1)];case 3:if(l=d.sent(),!l||e.isDisposed())return[2];for(c=[],f=0,p=l;f<p.length;f++)g=p[f],c.push({resource:i["Uri"].parse(g.fileName),edit:{range:this._textSpanToRange(e,g.textSpan),text:n}});return[2,{edits:c}]}}))}))},t}(h);function M(e){D=W(e,"typescript")}function E(e){P=W(e,"javascript")}function K(){return new Promise((function(e,t){if(!P)return t("JavaScript not registered!");e(P)}))}function R(){return new Promise((function(e,t){if(!D)return t("TypeScript not registered!");e(D)}))}function W(e,t){var n=new a(t,e),r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.getLanguageServiceWorker.apply(n,e)},o=new m(r);return i["languages"].registerCompletionItemProvider(t,new v(r)),i["languages"].registerSignatureHelpProvider(t,new _(r)),i["languages"].registerHoverProvider(t,new w(r)),i["languages"].registerDocumentHighlightProvider(t,new S(r)),i["languages"].registerDefinitionProvider(t,new k(o,r)),i["languages"].registerReferenceProvider(t,new x(o,r)),i["languages"].registerDocumentSymbolProvider(t,new C(r)),i["languages"].registerDocumentRangeFormattingEditProvider(t,new L(r)),i["languages"].registerOnTypeFormattingEditProvider(t,new T(r)),i["languages"].registerCodeActionProvider(t,new O(r)),i["languages"].registerRenameProvider(t,new N(r)),new b(o,e,t,r),r}}}]);