from .models import Blog, Comment
from rest_framework import serializers

class BlogSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source = 'user.username')
    class Meta:
        model = Blog
        fields = ['id','blog_num', 'title', 'created_at', 'user', 'body']

class CommentSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source = 'user.username')
    class Meta:
        model = Comment
        fields = ['id', 'blog', 'user', 'created_at', 'comment']