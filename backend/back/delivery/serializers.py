from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id', # pk 값
            'title',
            'people_num',
            'waiting_time',
            'place',
            'food_category',
            'content',
        )
        model = Post