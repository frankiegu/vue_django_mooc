# Generated by Django 3.0.1 on 2020-04-06 15:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='UserProfile',
        ),
    ]