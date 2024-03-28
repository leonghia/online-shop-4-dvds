import { ClientCart } from "@/models/cart";
import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";

interface ClientCartState {
    cart: ClientCart | null;
}

export interface ClientCartAction {
    payload: ClientCart | null;
}

const ClientCartContext = createContext<ClientCart | null>(null);
const ClientCartDispatchContext = createContext<Dispatch<ClientCartAction> | null>(null);

export function ClientCartProvider({children}: {children: ReactNode}) {
    const [state, dispatch] = useReducer(clientCartReducer, initialState);

    return (
        <ClientCartContext.Provider value={state.cart}>
            <ClientCartDispatchContext.Provider value={dispatch}>
                {children}
            </ClientCartDispatchContext.Provider>
        </ClientCartContext.Provider>
    );
}

export function useClientCart() {
    return useContext(ClientCartContext);
}

export function useClientCartDispatch() {
    return useContext(ClientCartDispatchContext);
}

function clientCartReducer(cart: ClientCartState, action: ClientCartAction) {
    return {cart: action.payload};
}

const initialState: ClientCartState = {
    cart: null
}