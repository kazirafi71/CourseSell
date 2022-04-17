from django.shortcuts import render
from .models import Course
from rest_framework import generics
from .serializers import CourseSerializer

# Create your views here.


class CourseList(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
