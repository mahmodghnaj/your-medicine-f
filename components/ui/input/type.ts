import { ReactNode } from "react";
import PropTypes from "prop-types";

export type variant = "standard";
export type icon = ReactNode;
export type label = string;
export type className = string;
export type rightIcon = ReactNode;

export const propTypesVariant: any = ["standard"];
export const propTypesIcon: any = PropTypes.node;
export const propTypesRightIcon: any = PropTypes.node;
export const propTypesClassName: any = PropTypes.string;
export const propTypesLabel: any = PropTypes.string;
