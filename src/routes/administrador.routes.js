import exportRoutes from "util/routes/exportRoutes.util";
import InstituicaoScreen from "screens/sistema/administracao/instituicoes.screen";
/*{
  path: "/sistema/administracao/",
  component: HomeAdministracaoScreen
}*/
const routes = [
  {
    path: "/sistema/administrador/instituicoes",
    component: InstituicaoScreen
  }
];

export default exportRoutes(routes);
