import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";

global.React = React;

global.act = act;

global.render = render;
global.cleanup = cleanup;
global.fireEvent = fireEvent;
global.waitForElement = waitForElement;
