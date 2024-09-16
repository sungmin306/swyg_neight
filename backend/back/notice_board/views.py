from django.shortcuts import render
from .models import Blog, Comment
from .serializers import BlogSerializer, CommentSerializer
from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .permissions import IsOwnerOrReadOnly
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination   # 페이지 분할해서 request
from collections import OrderedDict # 페이지 분할해서  request
from django_filters.rest_framework import DjangoFilterBackend
# Create your views here.


class BlogPageNumberPagination(PageNumberPagination):
    page_size = 6
    def get_paginated_response(self, data):
        return Response(OrderedDict([
            ('postList', data),
            ('pageCnt', self.page.paginator.num_pages), # 총 페이지수
            ('curPage', self.page.number), # 현재 페이지 
        ]))

class BlogViewSet(viewsets.ModelViewSet): #ModelviewSet 을 활용해서 CRUD 모두 구현
    # authentication 추가
    # BasicAuthentication HTTP 제어 header로 넘긴 id와 password를 base64로 encoding
    # SessionAuthentication 로그인될 때마다 저장되는 session 정보를 통해 인증
    authentication_classes = [BasicAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
    queryset = Blog.objects.all()
    agination_class = BlogPageNumberPagination
    serializer_class = BlogSerializer
    filter_backends = [DjangoFilterBackend] # DjangoFilterBackend 지정
    filterset_fields = ['blog_num'] # filter를 할 field
   
    def perform_create(self, serializer):
        serializer.save(user = self.request.user)

class CommentViewSet(viewsets.ModelViewSet):
    authentication_classes = [BasicAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)