from django.db import models


class LifetimeToken(models.Model):
    token = models.TextField(editable=False)

    def __str__(self):
        self.token
