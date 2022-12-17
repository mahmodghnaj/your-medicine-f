import type { ReactNode } from "react";
import PropTypes from "prop-types";

export type variant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "text"
  | "success"
  | "warning"
  | "danger";
export type size = "sm" | "md" | "lg";
export type fullWidth = boolean;
export type loading = boolean;
export type className = string;
export type children = ReactNode;
export type icon = ReactNode;
export type RightIcon = boolean;

//prop-types
export const propTypesVariant: any = [
  "primary",
  "secondary",
  "tertiary",
  "text",
  "success",
  "warning",
  "danger",
];
export const propTypesSize: any = ["sm", "md", "lg"];
export const propTypesFullWidth: any = PropTypes.bool;
export const propTypesLoading: any = PropTypes.bool;
export const propTypesClassName: any = PropTypes.string;
export const propTypesChildren: any = PropTypes.node.isRequired;
export const PropTypesIcon: any = PropTypes.node;
export const PropTypesRightIcon: any = PropTypes.bool;
