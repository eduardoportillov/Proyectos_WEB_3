# Generated by Django 4.0.4 on 2022-05-06 18:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pruebaapp', '0003_vehiculo_persona_vehiculos'),
    ]

    operations = [
        migrations.AlterField(
            model_name='persona',
            name='vehiculos',
            field=models.ManyToManyField(related_name='owners', to='pruebaapp.vehiculo'),
        ),
    ]
