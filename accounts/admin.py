from django.contrib import admin
from .models.lifetime_token import LifetimeToken

admin.site.register(LifetimeToken)
