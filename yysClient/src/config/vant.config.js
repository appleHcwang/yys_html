import { Button, List, Cell, CellGroup,Form,Field, Tabbar, TabbarItem} from 'vant';

export function vant(app) {
    app.use(Button);
    app.use(List)
    app.use(Cell);
    app.use(CellGroup);
    app.use(Form);
    app.use(Field);
    app.use(Tabbar);
    app.use(TabbarItem);
}

