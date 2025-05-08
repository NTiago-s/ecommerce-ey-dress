"use server";

import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.ACCESS_TOKEN_MP as string,
});

export async function createMercadoPagoPreference(items: any) {
  try {
    const preference = new Preference(client);

    const response = await preference.create({
      body: {
        items: items.map((product: any) => ({
          title: product.name,
          unit_price: product.price,
          quantity: product.quantity,
          currency_id: "ARS",
        })),
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
          failure: `${process.env.NEXT_PUBLIC_SITE_URL}/failure`,
          pending: `${process.env.NEXT_PUBLIC_SITE_URL}/pending`,
        },
        auto_return: "approved",
      },
    });

    return { id: response.id };
  } catch (error) {
    return { error: "Error al crear la preferencia" };
  }
}
