import React from "react";
import { flex } from "../../../styles";

export default (props: { children: React.ReactNode }) => <div className={`${flex} mb-[3.6vh]`}>{props.children}</div>