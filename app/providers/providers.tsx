'use client'

import React from "react";
import { TypeFilterProvider } from "../context";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return <TypeFilterProvider>{ children }</TypeFilterProvider>
}