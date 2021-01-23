// learn more about HTTP functions here: https://arc.codes/primitives/http
import * as arc from "@architect/functions";
import { HttpRequest, HttpResponse } from "@architect/functions";

const index = async function index(req: HttpRequest): Promise<HttpResponse> {
  return {
    html: "Hello from TypeScript!",
  };
};

export const handler = arc.http.async(index);
