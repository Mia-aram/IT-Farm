from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# 헬퍼 클래스


class UserManager(BaseUserManager):
    def create_user(self, email, password, **kwargs):
        """
        주어진 이메일, 비밀번호 등 개인정보로 User 인스턴스 생성
        """
        if not email:
            raise ValueError('Users must have an email address')
        user = self.model(
            email=email,
            nickname=kwargs['nickname'],
            user_type=kwargs['user_type'],
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email=None, password=None, **extra_fields):
        """
        주어진 이메일, 비밀번호 등 개인정보로 User 인스턴스 생성
        단, 최상위 사용자이므로 권한을 부여
        """
        superuser = self.create_user(
            email=email,
            password=password,
            nickname=extra_fields['nickname'],
            user_type=extra_fields['user_type'],
            mail_number=extra_fields['mail_number'],
            address=extra_fields['address'],
            address_detail=extra_fields['address_detail'],
            profile=extra_fields['profile'],
        )

        superuser.is_staff = True
        superuser.is_superuser = True
        superuser.is_active = True

        superuser.save(using=self._db)
        return superuser

    def get_by_natural_key(self, email):
        return self.get(email=email)

# AbstractBaseUser를 상속해서 유저 커스텀


class User(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(
        max_length=100, unique=True, null=False, blank=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    nickname = models.CharField(max_length=100, unique=True, null=False)
    USER_TYPE_CHOICES = [
        ('seller','Seller'),
        ('buyer','Buyer'),
        ('admin','Admin'),
    ]
    user_type = models.CharField(max_length=100, null=False, choices=USER_TYPE_CHOICES)
    mail_number = models.IntegerField(null=True)
    address = models.CharField(max_length=100, null=True)
    address_detail = models.CharField(max_length=100, null=True)
    profile = models.CharField(max_length=100, null=True)

    # 헬퍼 클래스 사용
    objects = UserManager()

    # 사용자의 username field는 email으로 설정 (이메일로 로그인)
    USERNAME_FIELD = 'email'
