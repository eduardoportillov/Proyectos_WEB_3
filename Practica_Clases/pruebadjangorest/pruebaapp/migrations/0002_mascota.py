# Generated by Django 4.0.4 on 2022-04-22 18:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pruebaapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Mascota',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=200)),
                ('tipo', models.IntegerField(choices=[(0, 'Perro'), (1, 'Gato'), (2, 'Loro'), (3, 'Mapache')])),
                ('persona', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='mascotas', to='pruebaapp.persona')),
            ],
        ),
    ]
