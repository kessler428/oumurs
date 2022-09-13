import { fetchConToken } from "../../../helpers/fecth";
import { setHistoryOfBills, setOneBill } from "./billsSlice";

export const createBill = (
  total,
  montoPagado,
  tipoFacturaId,
  clienteId,
  usuarioId,
  tipoAlmacenId,
  descuento,
  subTotal,
  detalles,
  tipoFact,
) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken(
        "factura",
        {
          total,
          montoPagado,
          tipoFacturaId,
          clienteId,
          descuento,
          subTotal,
          usuarioId,
          tipoAlmacenId,
        },
        "POST"
      );

      const body = await resp.json();
      const facturaId = body.facturaId;

      if (body.success === true) {
        const fact = await fetchConToken(
          `factura/detalle`,
          {
            facturaId,
            tipoAlmacenId,
            detalles,
          },
          "POST"
        );

        const bodyFact = await fact.json();
        if (bodyFact.success === true) {
          dispatch(getOneTicket(facturaId, tipoFact))
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};


export const getHistoryOfBills = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken(`factura/historial`);
      const body = await resp.json();

      if (body.success === true) {
        dispatch(setHistoryOfBills(body.historial));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export const getOneBill = (facturaId) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken(`factura/historial/${facturaId}`);
      const body = await resp.json();

      if (body.success === true) {
        dispatch(setOneBill(body.factura));
        window.location = 'detail_of_one_bill'
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export const getOneTicket = (facturaId, tipoFact) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken(`factura/historial/${facturaId}`);
      const body = await resp.json();

      if (body.success === true) {
        dispatch(setOneBill(body.factura));

        if(tipoFact === 1){
          window.location = 'baucher'
        }else if ( tipoFact === 2 ){
          window.location = 'ticket'
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}
