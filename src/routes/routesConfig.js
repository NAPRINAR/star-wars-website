import PeoplePage from "@containers/PeoplePage/PeoplePage";
import HomePage from "@containers/HomePage/HomePage"
import NotFoundPage from "@containers/NotFoundPage/NotFoundPage";
import PersonPage from "@containers/PersonPage/PersonPage"
import FavoritesPage from "@containers/FavoritesPage/FavoritesPage";
import SearchPage from "@containers/SearchPage/SearchPage"
import ErrorMessage from "@components/ErrorMessage/ErrorMessage";

const routesConfig = [
    {
        path:'/',
        exact:true,
        component:HomePage,
    },
    {
        path:'/people',
        exact:true,
        component:PeoplePage,
    },
    {
        path:'/people/:id',
        exact:true,
        component:PersonPage,
    },
    {
        path:'/favorites',
        exact:true,
        component:FavoritesPage,
    },
    {
        path:'/search',
        exact:true,
        component:SearchPage,
    },
    {
        path:'/fail',
        exact:true,
        component:ErrorMessage,
    },
    {
        path:'*',
        exact:false,
        component:NotFoundPage,
    },
    {
        path:'/not-found',
        exact:true,
        component:NotFoundPage,
    },

]

export default routesConfig;