from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from rest_framework_jwt.views import obtain_jwt_token

from course import views as course_view
from users import views as users_view

# 注册view set
router = routers.DefaultRouter()
# 用户
router.register('user', users_view.UserViewSet)
# 课程简要信息
router.register('course', course_view.CourseViewSet)
# 课程详细信息
router.register('full_course', course_view.FullCourseViewSet)
# 轮播图
router.register('banner', course_view.BannerViewSet)
# 轮播图导航
router.register('banner_nav', course_view.BannerNavViewSet)
# 播放记录
router.register('play_record', course_view.PlayRecordViewSet, basename='play_record')
# 学习记录
router.register('course_record', course_view.CourseRecordViewSet, basename='course_record')

urlpatterns = [
    # 渲染首页
    path('', TemplateView.as_view(template_name='index.html')),
    # drf默认验证
    path('api_auth/', include('rest_framework.urls')),
    # 获取jwt token
    path('api/login/', obtain_jwt_token),
    # api
    path('api/', include(router.urls)),
    # admin
    path('admin/', admin.site.urls),
    # drf 文档url
    path('docs/', include_docs_urls('小耿课堂')),
]

# 开发模式
if settings.DEBUG:
    urlpatterns.extend(static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT))
