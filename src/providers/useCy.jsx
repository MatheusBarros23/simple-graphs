import { useContext } from "react";
import { CyContext } from './CyProvider';

export const useCy = () => useContext(CyContext);