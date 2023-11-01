from django.urls import path
from .views import ProductCreateView, ProductUpdateView, ProductDeleteView, ProductReadView

urlpatterns = [
    path('create/', ProductCreateView.as_view()),
    path('update/', ProductUpdateView.as_view()),
    path('delete/', ProductDeleteView.as_view()),
    path('read/', ProductReadView.as_view()),
]
