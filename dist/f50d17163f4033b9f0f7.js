(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{414:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"feedback"},[a("div",{staticClass:"container"},[a("div",{staticClass:"section__wrap feedback__wrap"},[a("h2",{staticClass:"section__title work__title"},[this._v("Блок «Отзывы»")]),a("div",{staticClass:"section__form feedback__form"},[a("form",{staticClass:"form"},[a("div",{staticClass:"feedback__edit"},[this._m(0),a("div",{staticClass:"feedback__area"},[a("div",{staticClass:"feedback__user"},[a("label",{staticClass:"feedback__avatar"},[a("input",{staticClass:"feedback__avatar-input",attrs:{type:"file"},on:{change:this.appendFileAndRenderPhoto}})]),a("div",{staticClass:"feedback__avatar-img",class:{filled:this.renderedPhotoUrl.length},style:{backgroundImage:"url("+this.renderedPhotoUrl+")"}}),a("button",{staticClass:"feedback__add"},[this._v("Добавить фото")])]),this._m(1)])]),this._m(2)])]),this._m(3)])])])};e._withStripped=!0;s(128);var c={components:{appInput:function(){return s.e(0).then(s.bind(null,419))}},data:function(){return{renderedPhotoUrl:"",photo:""}},methods:{appendFileAndRenderPhoto:function(t){var a=this,s=t.target.files[0];this.photo=s;var e=new FileReader;try{e.readAsDataURL(s),e.onload=function(){return[a.renderedPhotoUrl=redaer.result]}}catch(t){alert("Что-то пошло не так")}}}},i=s(94),_=Object(i.a)(c,e,[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"section__edit-title feedback__edit-title"},[a("span",[this._v("Новый отзыв")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"feedback__content"},[a("div",{staticClass:"feedback__content-child feedback__content-name"},[a("label",{staticClass:"section__label",attrs:{for:"project-name"}},[this._v("Имя автора")]),a("input",{staticClass:"input input__line",attrs:{type:"text",id:"project-name",placeholder:"Название сайта"}})]),a("div",{staticClass:"feedback__content-child feedback__content-post"},[a("label",{staticClass:"section__label",attrs:{for:"project-name"}},[this._v("Титул автора")]),a("input",{staticClass:"input input__line",attrs:{type:"text",id:"project-name",placeholder:"Название сайта"}})]),a("div",{staticClass:"feedback__content-child feedback__content-descr"},[a("label",{staticClass:"section__label",attrs:{for:"project-tags"}},[this._v("Отзыв")]),a("textarea",{staticClass:"textarea textarea__feedback",attrs:{type:"text",id:"project-tags",placeholder:""}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"feedback__bottom"},[a("button",{staticClass:"btn btn_transparent"},[this._v("Отмена")]),a("button",{staticClass:"btn"},[this._v("Сохранить")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"section__list feedback__list"},[s("button",{staticClass:"section__card feedback__card section__card_add"},[s("div",{staticClass:"feedback__icon section__icon"},[s("div",{staticClass:"section__icon-plus"})]),s("div",{staticClass:"section__prompt"},[s("span",[t._v("Добавить отзыв")])])]),s("div",{staticClass:"section__card feedback__card feedback__card_edit"},[s("div",{staticClass:"feedback__top"},[s("div",{staticClass:"feedback__card-user"},[s("div",{staticClass:"feedback__card-avatar"},[s("img",{staticClass:"avatar",attrs:{src:"images/content/fb-1.png"}})]),s("div",{staticClass:"feedback__card-info"},[s("div",{staticClass:"feedback__card-name"},[s("span",[t._v("Владимир Сабанцев")])]),s("div",{staticClass:"feedback__card-post"},[s("span",[t._v("Преподаватель")])])])]),s("p",{staticClass:"feedback__card-descr"},[t._v("Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах")])]),s("div",{staticClass:"section__card-btns"},[s("button",{staticClass:"section__card-btn section__card-edit"},[t._v("Править")]),s("button",{staticClass:"section__card-btn section__card-delete"},[s("span",[t._v("Удалить")]),s("div",{staticClass:"delete"})])])]),s("div",{staticClass:"section__card feedback__card feedback__card_edit"},[s("div",{staticClass:"feedback__top"},[s("div",{staticClass:"feedback__card-user"},[s("div",{staticClass:"feedback__card-avatar"},[s("img",{staticClass:"avatar",attrs:{src:"images/content/fb-2.png"}})]),s("div",{staticClass:"feedback__card-info"},[s("div",{staticClass:"feedback__card-name"},[s("span",[t._v("Владимир Сабанцев")])]),s("div",{staticClass:"feedback__card-post"},[s("span",[t._v("Преподаватель")])])])]),s("p",{staticClass:"feedback__card-descr"},[t._v("Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах")])]),s("div",{staticClass:"section__card-btns"},[s("button",{staticClass:"section__card-btn section__card-edit"},[t._v("Править")]),s("button",{staticClass:"section__card-btn section__card-delete"},[s("span",[t._v("Удалить")]),s("div",{staticClass:"delete"})])])]),s("div",{staticClass:"section__card feedback__card feedback__card_edit"},[s("div",{staticClass:"feedback__top"},[s("div",{staticClass:"feedback__card-user"},[s("div",{staticClass:"feedback__card-avatar"},[s("img",{staticClass:"avatar",attrs:{src:"images/content/fb-1.png"}})]),s("div",{staticClass:"feedback__card-info"},[s("div",{staticClass:"feedback__card-name"},[s("span",[t._v("Владимир Сабанцев")])]),s("div",{staticClass:"feedback__card-post"},[s("span",[t._v("Преподаватель")])])])]),s("p",{staticClass:"feedback__card-descr"},[t._v("Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах")])]),s("div",{staticClass:"section__card-btns"},[s("button",{staticClass:"section__card-btn section__card-edit"},[t._v("Править")]),s("button",{staticClass:"section__card-btn section__card-delete"},[s("span",[t._v("Удалить")]),s("div",{staticClass:"delete"})])])])])}],!1,null,null,null);_.options.__file="src/admin/templates/pages/reviews.vue";a.default=_.exports}}]);