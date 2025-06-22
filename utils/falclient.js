import { fal } from "@fal-ai/client";

fal.config({
  credentials: process.env.REACT_APP_FAL_KEY
});

export default fal;