# Generated by Django 4.2.6 on 2023-11-08 14:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Product",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("kind", models.CharField(max_length=100)),
                ("weight", models.IntegerField(default=0)),
                ("count", models.IntegerField(default=0)),
                ("center", models.CharField(max_length=100)),
                ("sale_percent", models.IntegerField(null=True)),
                ("sale", models.BooleanField(default=False)),
                ("sale_price", models.IntegerField(null=True)),
                ("price", models.IntegerField()),
                ("photo", models.CharField(max_length=100, null=True)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
        ),
    ]