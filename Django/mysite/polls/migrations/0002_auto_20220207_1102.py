# Generated by Django 3.2.12 on 2022-02-07 19:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='choice',
            old_name='choice_Text',
            new_name='choice_text',
        ),
        migrations.RenameField(
            model_name='question',
            old_name='pub_Date',
            new_name='pub_date',
        ),
        migrations.RenameField(
            model_name='question',
            old_name='question_Text',
            new_name='question_text',
        ),
    ]
