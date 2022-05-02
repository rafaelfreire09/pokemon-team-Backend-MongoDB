import app from "./app";
import { LISTENING_MESSAGE, PORT } from "./constants/general.constants";

app.listen(PORT, () => console.log(LISTENING_MESSAGE + PORT));