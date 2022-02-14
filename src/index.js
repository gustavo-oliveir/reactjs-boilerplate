import React from "react";
import ReactDOM from "react-dom";
import { LoadingProvider } from "./contexts/Loading/loading.context";
import { ModalProvider } from "./contexts/Modal/modal.context";
import Modal from "./contexts/Modal";
import Loading from "./contexts/Loading";
import Router from "./config/routes";
import './assets/styles/global.css'

ReactDOM.render(
  <LoadingProvider>
    <ModalProvider>
      <Modal />
      <Loading />
      <Router />
    </ModalProvider>
  </LoadingProvider>,
  document.getElementById("root")
);
