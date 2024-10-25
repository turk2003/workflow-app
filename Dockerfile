# ขั้นตอนที่ 1: ใช้ Node.js เวอร์ชัน 18 เป็น base image
FROM node:18 AS build

# ตั้ง working directory
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง Angular CLI ถ้าจำเป็น
RUN npm install -g @angular/cli

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์โปรเจกต์ทั้งหมด
COPY . .

# สร้างโปรเจกต์ Angular
RUN npm run build --prod

# ขั้นตอนที่ 2: ใช้ Nginx เพื่อให้บริการ static files
FROM nginx:alpine

# คัดลอกไฟล์ที่ build เสร็จจากขั้นตอนที่ 1 ไปยัง Nginx
COPY --from=build /app/dist/your-angular-project /usr/share/nginx/html

# เปิดพอร์ตที่ 80
EXPOSE 80

# เริ่มต้น Nginx
CMD ["nginx", "-g", "daemon off;"]
