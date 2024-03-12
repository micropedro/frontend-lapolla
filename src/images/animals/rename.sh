#!/bin/bash

# Ruta de la carpeta con las imágenes (puedes modificarla según tu ubicación)
ruta_imagenes="./"

# Itera sobre todos los archivos con extensión .jpg (ajusta según tus necesidades)
for imagen in "$ruta_imagenes"/*.png; do
    # Extrae el nombre base sin la extensión
    nombre_base=$(basename "$imagen" .png)
    
    # Nuevo nombre con extensión .png (ajusta según tu preferencia)
    nuevo_nombre="$nombre_base-1.png"
    
    # Renombra la imagen
    mv "$imagen" "$ruta_imagenes/$nuevo_nombre"
done

echo "¡Imágenes renombradas exitosamente!"