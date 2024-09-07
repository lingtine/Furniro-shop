import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navigation, actionHeader } from '../../../../utils/constant';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navigation = navigation;
  actionHeader = actionHeader;
}
