from rest_framework import serializers
from .models import Course, Video, Tag, Prerequisite, Learning


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class PrerequisiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prerequisite
        fields = '__all__'


class LearningSerializer(serializers.ModelSerializer):
    class Meta:
        model = Learning
        fields = '__all__'
