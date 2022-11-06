from django.urls import path, include
from . import views
urlpatterns = [
    path('/get',views.get_api),
    path('/post',views.post_api)
]