# Generated by Django 3.0.1 on 2020-02-08 19:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0007_auto_20200208_1933'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='chapterlessonmodel',
            options={'get_latest_by': 'index', 'ordering': ['index'], 'verbose_name': '课程章节课时', 'verbose_name_plural': '课程章节课时'},
        ),
        migrations.AlterModelOptions(
            name='chaptermodel',
            options={'get_latest_by': 'index', 'ordering': ['index'], 'verbose_name': '课程章节', 'verbose_name_plural': '课程章节'},
        ),
    ]
