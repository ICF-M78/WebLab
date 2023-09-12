import { createVuetify } from "vuetify";
import "vuetify/styles";
/** materialdesignicons 图标集合 */
import "@mdi/font/css/materialdesignicons.css";
//
import dark_colors from "./scss/dark.module.scss";
import light_colors from "./scss/light.module.scss";

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: light_colors,
      },
      dark: {
        colors: dark_colors,
      },
    },
  },
});
