(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bdd19eec"],{"2d8d":function(t,s,e){},bf78:function(t,s,e){"use strict";var c=e("2d8d"),r=e.n(c);r.a},de9b:function(t,s,e){"use strict";e.r(s);var c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"full-course"}},[e("main-nav"),e("div",{staticClass:"course-box"},[e("course-detail")],1),e("main-footer")],1)},r=[],a=e("8c81"),i=e("2abc"),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"course-detail"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"course-common-detail"},[e("div",{staticClass:"img-cover",on:{click:t.handleBtnStartClick}},[e("img",{attrs:{src:t.courses.currentCourse.cover_img,alt:""},on:{mousedown:function(t){t.preventDefault()}}})]),e("div",{staticClass:"desc"},[e("div",{staticClass:"info"},[e("h2",{staticClass:"title"},[t._v(t._s(t.courses.currentCourse.title))]),e("div",{staticClass:"sub-title"},[t._v(t._s(t.courses.currentCourse.sub_title))]),e("div",{staticClass:"tag-list"},t._l(t.courses.currentCourse.tag,(function(s){return e("div",{key:s.id,staticClass:"tag"},[t._v(t._s(s.name))])})),0),e("div",{staticClass:"teacher-list"},[t._v(" 主讲教师： "),t._l(t.courses.currentCourse.teachers,(function(s){return e("div",{key:s.id,staticClass:"teacher"},[t._v(t._s(s.name)+" ")])})),t.courses.currentCourse.teachers&&0===t.courses.currentCourse.teachers.length?e("div",{staticClass:"teacher"},[t._v("暂无 ")]):t._e()],2)]),e("div",{staticClass:"btn-go",on:{click:t.handleBtnStartClick}},[t._v("开始学习")])])]),e("div",{staticClass:"course-content"},[e("div",{staticClass:"title"},[e("span",{class:{active:t.isShowDesc},on:{click:function(s){t.isShowDesc=!0}}},[t._v("课程介绍")]),e("span",{class:{active:!t.isShowDesc},on:{click:function(s){t.isShowDesc=!1}}},[t._v("目录")])]),e("div",{staticClass:"content"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowDesc,expression:"isShowDesc"}],staticClass:"h5-container",domProps:{innerHTML:t._s(t.courses.currentCourse.h5_desc)}}),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowDesc,expression:"!isShowDesc"}]},t._l(t.courses.currentCourse.chapter,(function(s){return e("div",{key:s.id,staticClass:"chapter"},[e("div",{staticClass:"chapter-title"},[e("i",{staticClass:"iconfont icon-Menu",staticStyle:{"margin-right":"5px"}}),t._v(" "+t._s(s.title)+" ")]),e("el-steps",{staticClass:"lesson",attrs:{space:35,direction:"vertical"}},t._l(s.lesson,(function(c){return e("el-step",{staticClass:"lesson-item",staticStyle:{"margin-left":"15px"},attrs:{title:c.title},nativeOn:{click:function(e){return t.handleToPlay({courseID:t.courses.currentCourse.id,chapterID:s.id,lessonID:c.id})}}})})),1)],1)})),0)])])])])},o=[],u=e("4ec3"),l={name:"CourseDetail",methods:{handleToPlay:function(t){this.$router.push({name:"courseVideo",params:t})},handleBtnStartClick:function(){var t=this.courses.currentCourse.id;Object(u["a"])(t);var s=this.courses.currentCourse.chapter[0].id,e=this.courses.currentCourse.chapter[0].lesson[0].id;this.handleToPlay({courseID:t,chapterID:s,lessonID:e})}},watch:{$route:function(t,s){var e=this;this.currentPage=1,Object(u["g"])(this.courseID).then((function(t){})).catch((function(t){e.$router.push({name:"404",params:{next:e.$router.path}})}))}},computed:{courseID:function(){return this.$route.params.courseID}},data:function(){return{courses:{currentCourse:{}},isShowDesc:!0}},created:function(){var t=this;Object(u["g"])(this.courseID).then((function(s){t.$set(t.courses,"currentCourse",s.data)})).catch((function(s){t.$router.push({name:"404",params:{next:t.$route.path}})}))}},d=l,h=(e("bf78"),e("623f")),v=Object(h["a"])(d,n,o,!1,null,"84a7fbdc",null),C=v.exports,f={name:"FullCourse",components:{CourseDetail:C,MainFooter:i["a"],MainNav:a["a"]}},p=f,m=(e("ebb7"),Object(h["a"])(p,c,r,!1,null,"7ea123ba",null));s["default"]=m.exports},deff:function(t,s,e){},ebb7:function(t,s,e){"use strict";var c=e("deff"),r=e.n(c);r.a}}]);