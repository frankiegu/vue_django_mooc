from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend
from django.db.models import Q
from rest_framework import viewsets, mixins, permissions, status, generics
from rest_framework.response import Response

from users import serializers

User = get_user_model()


class CustomBackend(ModelBackend):
    """
        自定义用户验证
    """

    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            # user = User.objects.get(Q(username=username) | Q(email=username))
            user = User.objects.get(Q(username=username))
            if user.check_password(password):
                return user
        except Exception as e:
            return None


class UserViewSet(viewsets.GenericViewSet,
                  mixins.ListModelMixin,
                  mixins.CreateModelMixin):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer

    def list(self, request, *args, **kwargs):
        serializer = self.get_serializer(self.request.user, many=False)

        return Response(serializer.data)

    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = [permissions.AllowAny]

        return super(UserViewSet, self).get_permissions()
