from ..models.lifetime_token import LifetimeToken


def store_token(token):
    LifetimeToken.objects.create(token=token)


def delete_token(token):

    check = LifetimeToken.objects.filter(token=token)
    if check.exists():
        check.delete()
        return True
    else:
        return False
