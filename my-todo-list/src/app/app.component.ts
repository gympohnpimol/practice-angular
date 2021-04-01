import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import { NEVER } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	public items = Array();
  public newTask!: string;


	/* When input is empty, it will
	not create a new division */
	public addToList() {
		if (this.newTask == '') {
		}
		else {
			this.items.push(this.newTask);
			this.newTask = '';
		}
	}
	public deleteTask(index: number) {
		this.items.splice(index, 1);
	}
}
