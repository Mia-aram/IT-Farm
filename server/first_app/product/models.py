from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100, null=False)
    kind = models.CharField(max_length=100,null=False)
    weight = models.IntegerField(default=0,null=False)
    count = models.IntegerField(default=0,null=False)
    center = models.CharField(max_length=100,null=False)
    sale_percent = models.IntegerField(null=True)
    sale = models.BooleanField(default=False)
    price = models.IntegerField(null=False)
    photo = models.CharField(max_length=100,null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)