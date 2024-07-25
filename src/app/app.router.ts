import { Routes, RouterModule } from "@angular/router"
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContactComponent } from "./contact/contact.component";
import { MeanComponent } from "./mean/mean.component";
import { MongoComponent } from "./mongo/mongo.component";
import { ExpressComponent } from "./express/express.component";
import { NodeComponent } from "./node/node.component";
import { GenaiComponent } from "./genai/genai.component";
import { RestCallComponent } from "./rest-call/rest-call.component";

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //default page
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'mean', component: MeanComponent },
    { path: 'mern', component: MeanComponent },
    { path: 'mongo', component: MongoComponent },
    { path: 'express', component: ExpressComponent },
    { path: 'node', component: NodeComponent },
    { path: 'genai', component: GenaiComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServiceComponent },
    { path: 'restcall', component: RestCallComponent}
];

export const routes = RouterModule.forRoot(router);