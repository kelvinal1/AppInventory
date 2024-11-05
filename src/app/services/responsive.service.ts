import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  private windowWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);
  isMobileView: boolean = this.isMobile();

  constructor() {
    // Escuchar los cambios en el tamaño de la ventana
    window.addEventListener('resize', this.onResize.bind(this));
  }

  // Método para manejar el cambio de tamaño
  private onResize() {
    this.windowWidth.next(window.innerWidth); // Emitir el nuevo ancho
    this.isMobileView = this.isMobile(); // Actualizar el estado móvil
  }

  // Método para verificar si es móvil
  isMobile() {
    return this.windowWidth.getValue() < 650;
  }
}
