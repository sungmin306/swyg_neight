#로그인하면 모든 게시물을 수정할 수 있어서 로그인 한 사용자가 게시글을 작성한 사용자와 동일할때만 수정할 수 있게 해주는 파일
from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        
        return obj.user == request.user