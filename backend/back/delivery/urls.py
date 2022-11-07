from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from .views import PostViewset


router = DefaultRouter()
router.register('/order', PostViewset)
urlpatterns = [
    path('', include(router.urls)),
    # path('/get',views.get_api),
    # path('/post',views.post_api)
]