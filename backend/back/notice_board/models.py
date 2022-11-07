from django.db import models
from django.utils import timezone
# Create your models here.
from django.db import models
from django.conf import settings
from django.contrib.auth.models import User

class Blog(models.Model):
    id = models.AutoField(primary_key=True, null=False, blank=False)
    blog_num = models.IntegerField(default='', null = True)
    title = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    body = models.TextField()

    def __str__(self):
        return self.title

class Comment(models.Model):
    id = models.AutoField(primary_key=True, null=False, blank=False)
    blog = models.ForeignKey(Blog, null=False, blank=False, on_delete=models.CASCADE)
    user = models.ForeignKey(User, null=False, blank=False, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True, null=False, blank=False)
    comment = models.TextField()

    def __str__(self):
        return self.comment
