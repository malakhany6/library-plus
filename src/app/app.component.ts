import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LibrariesPlusComponent } from './components/libraries-plus/libraries-plus.component';
import { ToggleMenuComponent } from "./components/toggle-menu/toggle-menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, HeaderComponent, LibrariesPlusComponent, ToggleMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'library-plus';
}


