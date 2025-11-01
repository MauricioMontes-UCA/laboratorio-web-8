# Laboratorio 8

> ¿Cuál es la diferencia entre autenticación y autorización?

Entiendo que autenticación es el proceso de identificar si el usuario es realmente quien dice ser. Cualquier persona puede ingresar el usuario, pero tiene que haber una forma de saber que el dueño del usuario es quien quiere usarlo, no alguien no quiere. Entonces, para eso está la autenticación.

La autorización por otro lado es dar los permisos al usuario, una vez autenticado. Hay usuarios que solo usarán el servicio, habrán otros que tienen que administrarlo; entonces solo los administradores deben tener los permisos y acceso a las herramientas de administradores. No puede ser que usuarios normales también tengan los permisos de administrador.

> ¿Cuál es la función del token JWT en la guía?

No logré iniciar sesión con `jerry@example.com`, supuestamente la contraseña era "1234" pero los hash no coinciden cuando lo intento, así que alguien lo habrá editado para cambiarle la contraseña... Ahora que lo veo, no está. Eh, en teoría es como un pase para hacer lo que quiera con el usuario una vez autenticado, pero lmao, idk.