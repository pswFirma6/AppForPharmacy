FROM node:14.17.6-alpine AS frontBuild
WORKDIR /app
COPY . .
RUN npm install  
RUN npm run build --prod

FROM nginx:1.19.8-alpine AS gatewayWithFront
COPY --from=frontBuild /app/ApplicationForPharmacy /usr/share/nginx/html 
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 4200

ENTRYPOINT ["nginx","-g","daemon off;"]