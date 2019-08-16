import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'my-dream-app';
  datas: any = [
    <any>{
    } 
  ];
  id: string = ""

  ngOnInit(){
    this.PegarDados(this.id);
  }
  detalheItem(id){
    this.PegarDados(id)

  }

  PegarDados(id){
    if(id == ""){
      var id2 = ""
    }
    else{
      var id2 = "/"+ id
    }
    var url = 'https://jsonplaceholder.typicode.com/todos' + id2
    fetch(url,{method: 'GET'})
    .then(response => response.json())
    .then(json => this.datas = json)
    .then(data => {
    console.log(data) // Prints result from `response.json()` in getRequest
})
  



        
      
      
  }  



}
