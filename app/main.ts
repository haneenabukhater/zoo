import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

//this class is the entry point of the application
const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
