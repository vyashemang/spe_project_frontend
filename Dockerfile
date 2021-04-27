#### Stage 1: Build the react application
FROM node:12.4.0-alpine as build
WORKDIR /app
COPY . ./
# Build the application
RUN npm install && npm run build
#### Stage 2: Serve the React application from Nginx
FROM nginx:1.17.0-alpine
# Copy the react build from Stage 1
COPY --from=build /app/dist/AngularJwtAuth /usr/share/nginx/html
# Copy our custom nginx config (created and placed in the app directory)
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]

# docker run --name spe_front_con1 -p 8086:80 b6c9610629e4
# then localhost:8086
