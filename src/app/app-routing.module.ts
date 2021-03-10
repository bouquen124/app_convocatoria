import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },

  {
    path: 'tipos',
    loadChildren: () => import('./paginas/tipos/tipos.module').then( m => m.TiposPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'estados',
    loadChildren: () => import('./paginas/estados/estados.module').then( m => m.EstadosPageModule)
  },
  {
    path: 'clinicas',
    loadChildren: () => import('./paginas/clinicas/clinicas.module').then( m => m.ClinicasPageModule)
  },
  {
    path: 'profesionales',
    loadChildren: () => import('./paginas/profesionales/profesionales.module').then( m => m.ProfesionalesPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./paginas/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'estudiantes',
    loadChildren: () => import('./paginas/estudiantes/estudiantes.module').then( m => m.EstudiantesPageModule)
  },
  {
    path: 'casos',
    loadChildren: () => import('./paginas/casos/casos.module').then( m => m.CasosPageModule)
  },
  {
    path: 'boletines',
    loadChildren: () => import('./paginas/boletines/boletines.module').then( m => m.BoletinesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
