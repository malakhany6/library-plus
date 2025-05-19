import { Component, OnInit } from '@angular/core';
import { AcademicService } from './services.model';
import { ServicesService } from './services.service';
import { RouterModule } from '@angular/router';  // تأكد من استيراد RouterModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: AcademicService[] = [];
  
  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.services = this.servicesService.getServices();
  }
}