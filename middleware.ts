import { NextResponse } from "next/server";

export const middleware = (request) => {
    console.log('Middleware is running');
    return NextResponse.redirect(new URL('/', request.url))
}


export const config = {
    matcher:['/todos']
}

export default middleware;