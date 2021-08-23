import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-theme-change',
  templateUrl: './theme-change.component.html',
  styleUrls: ['./theme-change.component.scss']
})
export class ThemeChangeComponent implements OnInit {

  darkMode$ = this.darkModeService.darkMode$;

  constructor(
    private darkModeService: DarkModeService
  ) { }

  ngOnInit(): void {
  }
  
  onToggle(): void {
    this.darkModeService.toggle();
  }

}
