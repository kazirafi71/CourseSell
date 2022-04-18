from django.urls import path, include
from .views import CourseList, course_details

urlpatterns = [
    path('courses/', CourseList.as_view()),
    # path('courses/<str:slug>/', CourseDetails.as_view()),
    path('course-details/<str:slug>/', course_details)
]
