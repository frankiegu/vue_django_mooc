# Generated by Django 3.0.1 on 2020-02-07 18:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('course', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BannerModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=32, verbose_name='标题')),
                ('desc', models.CharField(max_length=32, verbose_name='描述')),
                ('index', models.PositiveSmallIntegerField(default=1, verbose_name='轮播图序号')),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='course.CourseModel')),
            ],
            options={
                'verbose_name': '轮播图',
                'verbose_name_plural': '轮播图',
            },
        ),
    ]
