import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;

  message = '';

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Enviado Correctamente`;
    }
  }
  //arreglo component
  componentes: Componente[] =[
    {
      icon: 'home',
      name: 'Home',
      redirectTo: "/bienvenida"
    },
    {
      icon: 'location-outline',
      name: 'Location',
      redirectTo: "/servicios"
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}

//ahora la interfaz de los componentes
interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}
