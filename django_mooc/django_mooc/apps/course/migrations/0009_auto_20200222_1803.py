# Generated by Django 3.0.1 on 2020-02-22 18:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0008_auto_20200221_0046'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lesson',
            name='video',
            field=models.URLField(verbose_name='视频链接'),
        ),
    ]
