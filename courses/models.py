from django.db import models

# Create your models here.


class Course(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    price = models.IntegerField()
    discount = models.IntegerField(blank=True)
    active = models.BooleanField(default=False)
    thumbnail = models.ImageField(upload_to='courses/', blank=True)
    date = models.DateTimeField(auto_now_add=True)
    resource = models.FileField(upload_to='resource/')
    length = models.IntegerField()

    def __str__(self):
        return self.name


class Tag(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    description = models.CharField(max_length=100)


class Prerequisite(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    description = models.CharField(max_length=100)


class Learning(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    description = models.CharField(max_length=100)


class Video(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    serial_no = models.IntegerField()
    is_preview = models.BooleanField(default=False)
    video_id = models.CharField(max_length=100)

    def __str__(self):
        return self.title
