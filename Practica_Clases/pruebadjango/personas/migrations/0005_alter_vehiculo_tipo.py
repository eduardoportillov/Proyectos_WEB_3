# Generated by Django 4.0.3 on 2022-04-01 18:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('personas', '0004_vehiculo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vehiculo',
            name='tipo',
            field=models.IntegerField(choices=[(0, 'Auto'), (1, 'Moto'), (2, 'Bote')]),
        ),
    ]
