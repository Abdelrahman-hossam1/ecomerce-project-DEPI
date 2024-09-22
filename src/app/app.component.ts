import { AfterViewInit, Component, inject, OnInit, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {

  title = 'ecommerce-project';
  @ViewChild(LoaderComponent) loader?: LoaderComponent;
  private dataService = inject(DataService);
  ngAfterViewInit(): void {
    this.loader?.showLoader(true);
    this.dataService.fetchData().subscribe((data)=>{
      console.error('  fetching data succesfully ' , data);
      this.loader?showLoader(false);
     },(error)=>{
      console.error('error fetching data' , error);
      this.loader?showLoader(false);

    })
  }
}
function showLoader(arg0: boolean) {
  throw new Error('Function not implemented.');
}

