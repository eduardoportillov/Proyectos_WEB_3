# Generated by Django 4.0.4 on 2022-06-29 00:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mercado', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='producto',
            old_name='categoria',
            new_name='categoria_id',
        ),
        migrations.RenameField(
            model_name='producto',
            old_name='empresa',
            new_name='empresa_id',
        ),
    ]
