import App from "./configs/app.config";

import StatisticalRouter from "./routes/admin/statistical.router";
import UsersRouter from "./routes/admin/users.router";
import TagsRouter from "./routes/admin/tags.router";
import ColorsRouter from "./routes/admin/colors.router";

import AuthRouter from "./routes/user/auth.router";
import ProfileRouter from "./routes/user/profile.router";
import ProjectRouter from "./routes/user/project.router";
import ColumnRouter from "./routes/user/column.router";
import CardRouter from "./routes/user/card.router";
import EventRouter from "./routes/user/event.router";

const app = new App(
  [
    new AuthRouter(),
    new ProfileRouter(),
    new ProjectRouter(),
    new ColumnRouter(),
    new CardRouter(),
    new EventRouter(),
  ],
  [
    new StatisticalRouter(),
    new UsersRouter(),
    new TagsRouter(),
    new ColorsRouter(),
  ]
);

app.listen();
