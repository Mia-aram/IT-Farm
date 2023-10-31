from django.db import models

class Farms(models.Model):
    name = models.CharField(max_length=100, null=False)
    # user_id = models.IntegerField(null=False)
    area = models.IntegerField(default=0,null=False)
    address = models.CharField(max_length=100,null=False)
    method = models.CharField(max_length=100,null=False)
    eco = models.CharField(max_length=100,null=False)
    kind = models.CharField(max_length=100,null=False)
    quantity = models.IntegerField(default=0,null=False)
    # crop = models.IntegerField(default=0,null=False)
    # unit_type = models.BooleanField(default=True)