import { Axios } from "axios";

export class Http {
  protected http: Axios;

  constructor(http: Axios) {
    this.http = http;
  }
}
