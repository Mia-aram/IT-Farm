from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .serializers import *
from .models import Product
from django.shortcuts import get_object_or_404


class ProductCreateView(APIView):
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            product = serializer.save()
            return Response({"message": "성공"}, status=status.HTTP_201_CREATED)
        errors = serializer.errors
        return Response({"message": "실패", "error": errors}, status=status.HTTP_400_BAD_REQUEST)

class ProductUpdateView(APIView):
    def post(self, request):
        pk = request.data['id']
        print(pk)
        product = get_object_or_404(Product, pk=pk)
        serializer = ProductSerializer(instance=product, data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "성공"}, status=status.HTTP_201_CREATED)
        errors = serializer.errors
        return Response({"message": "실패", "error": errors}, status=status.HTTP_400_BAD_REQUEST)
    
class ProductDeleteView(APIView):
    def post(self, request):
        product_id = request.data.get('id')
        product = get_object_or_404(Product, id=product_id)
        if product.is_valid():
            product.delete()
            return Response({'message':'삭제'})
        errors = product.errors
        return Response({'message':'실패', 'error':errors}, status=status.HTTP_400_BAD_REQUEST)

class ProductReadView(APIView):
    def post(self, request):
        product_name = request.data.get('name')
        products = Product.objects.filter(name=product_name)
        serializer = ProductSerializer(products,many=True)
        return Response(serializer.data)