import type { RootState, AppDispatch } from "./RootReducer";
import { useSelector, useDispatch } from "react-redux";

export const useAS = useSelector.withTypes<RootState>();
export const useAD = useDispatch.withTypes<AppDispatch>();



