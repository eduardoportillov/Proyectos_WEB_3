# Generated by Django 4.0.4 on 2022-06-29 04:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mercado', '0002_rename_categoria_producto_categoria_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='precio',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
    ]
