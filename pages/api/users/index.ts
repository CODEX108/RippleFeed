import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        res.status(405).end();
    }

    try {
        const users = await prisma?.user.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        return res.status(200).json(users);
    } catch (e) {
        console.error(e);
        return res.status(400).end();
    }
}