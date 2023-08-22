import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ['/', '/about', '/our-units', '/events', '/blog', '/contact', '/api/webhooks/clerk',],
    ignoredRoutes: ['/api/webhooks/clerk'],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};