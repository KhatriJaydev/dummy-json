import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {
  constructor(private apiService: ApiService) { }

  updateData() {
    this.apiService.updateData('Data from Component 1')
  }
}
