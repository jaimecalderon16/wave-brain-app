import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GptchatComponent } from './pages/gptchat/gptchat.component';
import { PlanesGptComponent } from './pages/planes-gpt/planes-gpt.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { BotsInteligentesComponent } from './pages/bots-inteligentes/bots-inteligentes.component';



@NgModule({

  imports: [
    RouterModule.forRoot(
      [
        {path: 'gptchat', component: GptchatComponent},
        {path: 'planesgpt', component: PlanesGptComponent},
        {path: 'contacto', component: ContactComponent},
        {path: '', component: PageMainComponent},
        {path: 'Bots', component: BotsInteligentesComponent}
      ]
    )
  ], exports: [RouterModule]
})
export class AppRoutingModule { }
