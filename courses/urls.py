from django.urls import path, include
from .views import CourseList

urlpatterns = [
    path('courses/', CourseList.as_view())
]
