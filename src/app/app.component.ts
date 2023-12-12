import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  note:string="";
  notes:string []=[];
  affichernote:boolean=false;
  sousnotes:string[]=[];
  constructor( ){
  }
  ngOnInit():void{
    this.getNote();
    this.getNotes;
    this.getAffichenote();
    this.getSousnotes;
  }
  getNote()
  {
    //this.note=this.notesservice.note1;
  }
  getAffichenote()
  {
    //this.affichernote=this.notesservice.affichernote1;
  }
  getNotes()
  {
    //this.notes=this.notesservice.notes1;
  }
  getSousnotes()
  {
    //this.sousnotes=this.notesservice.sousnotes1;
  }
  addnote(){
    //this.notesservice.addnote();
    this.note="";
  }
  affichnotes()
  {
    //this.notesservice.affichnotes();
  }
  deletenote(i:number)
  {
    //this.notesservice.deletenote(i);
  }
  Ajouter_sousnote()
  {
    //this.notesservice.Ajouter_sousnote();
  }

}

