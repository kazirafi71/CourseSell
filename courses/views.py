from django.shortcuts import render
from .models import Course, Video, Prerequisite, Tag, Learning
from rest_framework import generics
from .serializers import CourseSerializer, VideoSerializer, PrerequisiteSerializer, TagSerializer, LearningSerializer
from django.http import JsonResponse


# Create your views here.


class CourseList(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


# class CourseDetails(generics.RetrieveAPIView):
#     queryset = Course.objects.all()
#     serializer_class = CourseSerializer
#     lookup_field = 'slug'


def course_details(request, slug):
    course = Course.objects.get(slug=slug)
    serializer = CourseSerializer(course)
    course_id = serializer.data.get('id')
    course_video = Video.objects.filter(
        course_id=course_id).order_by('serial_no')
    course_prerequisites = Prerequisite.objects.filter(course_id=course_id)
    course_tag = Prerequisite.objects.filter(course_id=course_id)
    learning = Learning.objects.filter(course_id=course_id)
    video_serializer = VideoSerializer(course_video, many=True)
    prerequisites_serializer = PrerequisiteSerializer(
        course_prerequisites, many=True)
    tag_serializer = TagSerializer(course_tag, many=True)
    learning_serializer = LearningSerializer(learning, many=True)
    return JsonResponse({'course_info': serializer.data, 'videos': video_serializer.data, "prerequisite": prerequisites_serializer.data, "tags": tag_serializer.data, "learning": learning_serializer.data})
