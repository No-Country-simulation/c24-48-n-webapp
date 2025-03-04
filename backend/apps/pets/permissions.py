from rest_framework.permissions import BasePermission

class IsAdminOrStaff(BasePermission):
    """
    Clase de permiso que permite el acceso solo a usuarios administradores y del personal.

    Esta clase verifica si el usuario solicitante es un administrador (superusuario) o un miembro del personal.
    Si el usuario cumple con alguna de estas condiciones, se le concede acceso a la vista.

    Métodos:
        has_permission(request, view): Verifica los permisos del usuario.
    """
    def has_permission(self, request, view):
        """
        Verifica si el usuario tiene permisos de administrador o de personal.

        Args:
            request (HttpRequest): El objeto de solicitud HTTP.
            view (View): La vista a la que se accede.

        Returns:
            bool: True si el usuario es administrador o miembro del personal, False en caso contrario.
        """
        return request.user and (request.user.is_staff or request.user.is_superuser)
