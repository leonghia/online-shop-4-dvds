import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const resForMomo = await fetch("https://test-payment.momo.vn/v2/gateway/api/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Content-Length": Buffer.byteLength(req.body).toString()
                },
                body: req.body,
            });
            const data = await resForMomo.json();
            res.status(200).json(data);
        } catch(err) {
            res.status(500).end();
        }
    }
    res.status(404).end();
}