from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http.response import HttpResponse
from .models import Post
from .serializers import PostSerializer 
from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .permissions import IsOwnerOrReadOnly
from rest_framework.pagination import PageNumberPagination   # 페이지 분할해서 request
from collections import OrderedDict # 페이지 분할해서  request
# Create your views here.


# #목록보여주기
# @api_view(['GET'])
# def get_api(request):
#     posts = Post.objects.all()
#     serailized_posts= PostSerializer(posts, many=True)
#     return Response(serailized_posts.data)

# #주문하기(Create)
# @api_view(['POST'])
# def post_api(request):
#     if request.method == 'GET':
#         return HttpResponse(status=200)
#     if request.method == 'POST':
#         serializer = PostSerializer(data = request.data, many=True)
#         if(serializer.is_valid()):
#             serializer.save()
#             return Response(serializer.data ,status=200)
#         return Response(serializer.errors ,status=status.HTTP_400_BAD_REQUEST)

class PostPageNumberPagination(PageNumberPagination):
    page_size = 3
    def get_paginated_response(self, data):
        return Response(OrderedDict([
            ('postList', data),
            ('pageCnt', self.page.paginator.num_pages), # 총 페이지수
            ('curPage', self.page.number), # 현재 페이지 
        ]))

class PostViewset(viewsets.ModelViewSet):
    authentication_classes=[BasicAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
    queryset = Post.objects.all()
    pagination_class = PostPageNumberPagination
    serializer_class = PostSerializer

    # class BlogViewSet(viewsets.ModelViewSet): #ModelviewSet 을 활용해서 CRUD 모두 구현
#     # authentication 추가
#     # BasicAuthentication HTTP 제어 header로 넘긴 id와 password를 base64로 encoding
#     # SessionAuthentication 로그인될 때마다 저장되는 session 정보를 통해 인증
#     authentication_classes = [BasicAuthentication, SessionAuthentication]
#     permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
#     queryset = Blog.objects.all()
#     serializer_class = BlogSerializer
   
#     def perform_create(self, serializer):
#         serializer.save(user = self.request.user)