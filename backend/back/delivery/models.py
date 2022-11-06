from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Post(models.Model):
    title = models.CharField(null = False, max_length=100) #제목
    people_num = models.IntegerField() # 모집인원
    waiting_time = models.IntegerField(blank = True, null = True) # 소요시간
    place = models.CharField(max_length=100) #분배장소
    food_category = models.IntegerField()
    # 커피/디저트 = 0 , 패스트푸드 = 1 도시락 = 2 아시안 = 3 분식 = 4 한식 = 5 중식 = 6 일식 = 7 양식 = 8
    content =  models.CharField(max_length = 500 ) # 본문 내용
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    #user = models.ForeignKey(User, null=True, blank=False, on_delete=models.CASCADE, default = '')

    def __str__(self):
        return self.title
    