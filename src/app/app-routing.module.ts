import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeStateComponent} from './component/home-state/home-state.component';
import {GlobalStateComponent} from './component/global-state/global-state.component';

const routes: Routes = [
    {path: '', component: GlobalStateComponent},
    {path: 'home', component: HomeStateComponent, data: {animation: 'isRight'}},
    {path: 'global', component: GlobalStateComponent, data: {animation: 'isLeft'}},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
