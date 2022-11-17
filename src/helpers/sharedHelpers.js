import moment from "moment";
import classnames from "classnames";
import "moment/locale/pt-br";
import urls from "../constants/urls";
import { createBrowserHistory } from "history";

export const smartFormatterDate = (value, format) => {
  if (value) return moment(value).utc().locale("pt-br").format(format);
  return " - ";
};

export const smartFormatterDateNotifications = (value, format) => {
  if (value) return moment(value).locale("pt-br").format(format);
  return " - ";
};

export const smartGet = (value, get) => {
  if (value) return moment(value).utc().get(get);
  return " - ";
};

export const startAndEndDateOfTheMonth = value => {
  const firstDayMonth = smartFormatterDate(
    moment(value).startOf("month"),
    "YYYY-MM-DD"
  );
  const endDayMonth = smartFormatterDate(
    moment(value).endOf("month"),
    "YYYY-MM-DD"
  );
  const array_date = { firstDayMonth, endDayMonth };
  return array_date;
};

const opts = { format: "%v", locale: "pt-BR", currency: "BRL" };
moment.locale(opts.locale);

export const history = createBrowserHistory();

export const convertToSlug = text => {
  const a = "àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;";
  const b = "aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------";
  const p = new RegExp(a.split("").join("|"), "g");
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(p, c => b.charAt(a.indexOf(c)))
    .replace(/&/g, "-and-")
    .replace(/[\s\W-]+/g, "-");
};

export const manageClasses = (...params) => classnames(...params).split(" ");

export const validateEmail = email => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const linkNotification = ({
  kind,
  idelement,
  title,
  canvas_publication_id
}) => {
  switch (kind) {
    case "canvas":
      return `${urls.ROUTES.DETAILS_PUBLICATION}/${convertToSlug(
        title
      )}/${idelement}`;
    case "event":
      return `${urls.ROUTES.CALENDAR}`;
    case "product":
      return `${urls.ROUTES.DETAILS_PRODUCT}/${convertToSlug(
        title
      )}/${idelement}`;
    case "course":
      return `${urls.ROUTES.ACADEMY}/${idelement}`;
    case "file":
      return `${urls.ROUTES.FILES}/${convertToSlug(title)}/${idelement}`;
    case "user_markup":
      return `${urls.ROUTES.DETAILS_PUBLICATION}/${convertToSlug(
        title
      )}-${idelement}/${canvas_publication_id}`;
    default:
      return `${urls.ROUTES.MY_NOTIFICATIONS}`;
  }
};
