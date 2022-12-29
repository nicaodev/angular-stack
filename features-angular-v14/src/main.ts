import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


// antes
// import { AppModule } from './app/app.module';

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app-routing.module';

//depois
// Muda configurações para funcionar com standalone component
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule) // Implementa rotas para dentro do standalone component
  ]
}).catch(err => console.error(err));

