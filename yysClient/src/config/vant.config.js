import {
    Button, List, Cell, CellGroup,
    Form, Field, Tabbar, TabbarItem,
    Swipe, SwipeItem, Search, Grid, GridItem, NavBar, Icon, Tab, Tabs
} from 'vant';
import { Lazyload } from 'vant';
export function vant(app) {
    app.use(Button);
    app.use(List)
    app.use(Cell);
    app.use(CellGroup);
    app.use(Form);
    app.use(Field);
    app.use(Tabbar);
    app.use(TabbarItem);
    app.use(Swipe);
    app.use(SwipeItem);
    app.use(Lazyload);
    app.use(Search);
    app.use(Grid);
    app.use(GridItem);
    app.use(NavBar);
    app.use(Icon);
    app.use(Tab);
    app.use(Tabs);
}

