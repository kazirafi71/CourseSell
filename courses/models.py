from django.db import models

# Create your models here.


class Course(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    price = models.IntegerField()
    discount = models.IntegerField(blank=True)
    active = models.BooleanField(default=False)
    thumbnail = models.ImageField(upload_to='courses/', blank=True)
    date = models.DateTimeField(auto_now_add=True)
    resource = models.FileField(upload_to='resource/')
    length = models.IntegerField()


class Tag(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    description = models.CharField(max_length=100)


class Prerequisite(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    description = models.CharField(max_length=100)

class Learning(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    description = models.CharField(max_length=100)
