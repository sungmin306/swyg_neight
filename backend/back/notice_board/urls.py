from django.urls import path, include
from .views import BlogViewSet, CommentViewSet
from rest_framework.routers import DefaultRouter

# blog_list = BlogViewSet.as_view({
#     'get': 'list',
#     'post': 'create'
# })


# blog_detail = BlogViewSet.as_view({
#     'get': 'retrieve',
#     'put': 'update',
#     'delete': 'destroy'
# })
router = DefaultRouter()
router.register('/blog', BlogViewSet)
router.register('/comment', CommentViewSet, basename='comment')
urlpatterns =[
    path('', include(router.urls)),
 #   path('blog/<int:pk>/', blog_detail),
]