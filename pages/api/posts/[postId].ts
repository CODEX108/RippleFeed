import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const { postId } = req.query;

    if (!postId || typeof postId !== 'string') {
      throw new Error('Invalid ID');
    }

    //load the post
    const post = await prisma.post.findUnique({
      //populate the user
        where: {
        id: postId,
      },
    
      include: {
    
        user: true,
        //load the comments
        comments: {
          include: {
            //and the user who created the comments
            user: true
          },
          //
          orderBy: {
            createdAt: 'desc'
          }
        },
      },
    });

    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}