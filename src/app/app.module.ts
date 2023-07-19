import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { BodyPageComponent } from './components/body-page/body-page.component';
import { MocapComponent } from './components/mocap/mocap.component';
import { AppRoutingModule } from './app-routing.module';
import { GptchatComponent } from './pages/gptchat/gptchat.component';
import { PlanesGptComponent } from './pages/planes-gpt/planes-gpt.component';
import { PricingCardComponent } from './components/pricing-card/pricing-card.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { NavBarComprasComponent } from './components/nav-bar-compras/nav-bar-compras.component';
import { FooterComprasComponent } from './components/footer-compras/footer-compras.component';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BotsInteligentesComponent } from './pages/bots-inteligentes/bots-inteligentes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CarruselComponent,
    BodyPageComponent,
    MocapComponent,
    GptchatComponent,
    PlanesGptComponent,
    PricingCardComponent,
    WhatsappButtonComponent,
    NavBarComprasComponent,
    FooterComprasComponent,
    PageMainComponent,
    ContactComponent,
    BotsInteligentesComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
