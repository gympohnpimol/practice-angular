import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NEVER } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	public items = Array();
  public newTask!: string;

  public id = Array();
  public ids !: string;

	/* When input is empty, it will
	not create a new division */
	public addToList() {
		if (this.newTask == '') {
		}

		else {
      this.id.push(this.ids);
			this.items.push(this.newTask);
			this.newTask = '';
      this.ids = '';
		}
	}
	public deleteTask(index: number) {
		this.items.splice(index, 1);
	}

  public shownTask(){
    alert("task : " +  this.items + ", detailed: " + this.id)
  }
 
}

