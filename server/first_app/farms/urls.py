from django.urls import path
from .views import FarmCreateView, FarmUpdateView, FarmDeleteView, FarmReadView

urlpatterns = [
    path('create/', FarmCreateView.as_view()),
    path('update/', FarmUpdateView.as_view()),
    path('delete/', FarmDeleteView.as_view()),
    path('read/', FarmReadView.as_view()),
]
