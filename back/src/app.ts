import { MiddleWare } from "./middleware";
import express from "express";

export class App {
  constructor(
    private readonly app = express(),
    private readonly router = new MiddleWare(app),
  ) {
    this.setMiddlewares();
  }

  getApp() {
    return this.app;
  }

  setMiddlewares() {
    return this.router;
  }
}
