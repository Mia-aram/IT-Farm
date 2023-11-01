from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .serializers import *
from .models import Farms
from django.shortcuts import get_object_or_404


class FarmCreateView(APIView):
    def post(self, request):
        serializer = FarmSerializer(data=request.data)
        if serializer.is_valid():
            farm = serializer.save()
            return Response({"message": "성공"}, status=status.HTTP_201_CREATED)
        errors = serializer.errors
        return Response({"message": "실패", "error": errors}, status=status.HTTP_400_BAD_REQUEST)

class FarmUpdateView(APIView):
    def post(self, request):
        pk = request.data['id']
        print(pk)
        farm = get_object_or_404(Farms, pk=pk)
        serializer = FarmSerializer(instance=farm, data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "성공"}, status=status.HTTP_201_CREATED)
        errors = serializer.errors
        return Response({"message": "실패", "error": errors}, status=status.HTTP_400_BAD_REQUEST)
    
class FarmDeleteView(APIView):
    def post(self, request):
        farm_id = request.data.get('id')
        farm = get_object_or_404(Farms, id=farm_id)
        farm.delete()
        return Response({'message':'삭제'})

class FarmReadView(APIView):
    def post(self, request):
        farm_name = request.data.get('name')
        farms = Farms.objects.filter(name=farm_name)
        serializer = FarmSerializer(farms,many=True)
        return Response(serializer.data)