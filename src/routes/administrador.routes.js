import exportRoutes from "util/routes/exportRoutes.util";
import HomeAdministradorScreen from "screens/sistema/administracao/instituicoes.screen";

const routes = [
  {
    path: "/sistema/administracao",
    component: HomeAdministradorScreen
  }
];

export default exportRoutes(routes);
