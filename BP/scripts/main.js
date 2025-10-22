/**
 * Horse Breeding Enhanced - Main Script
 * Sistema de herencia avanzada para caballos
 */

import { world, system } from '@minecraft/server';

// Mensaje de inicio para verificar que el script carga
world.sendMessage('§a[Horse Breeding] §fAddon cargado correctamente');

// Log en consola
console.log('Horse Breeding Enhanced - Iniciado');

/**
 * Sistema de inicialización
 */
system.runInterval(() => {
  // Este será nuestro tick principal
  // Por ahora solo verificamos que funciona
}, 100); // cada 5 segundos (100 ticks)
